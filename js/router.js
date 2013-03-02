/*global define:true */

define('router', ['jquery', 'sammy', 'presenter', 'config', 'store', 'sammy-title'], function ($, Sammy, presenter, config, store) {

    "use strict";

    var defaultRoute = '',

        startupUrl = '',

        sammy = new Sammy.Application(function () {
            if (Sammy.Title) {
                this.use(Sammy.Title);
                this.setTitle(config.title);
            }
        }),

        navigateBack = function () {
            window.history.back();
        },

        navigateTo = function (url) {
            sammy.setLocation(url);
        },

        register = function (options) {

            if (options.routes) {

                // Register a list of routes
                $.each(options.routes, function (route) {

                    registerRoute({
                        route: route.route,
                        title: route.title,
                        imgOffset: route.imgOffsets,
                        callback: route.callback,
                        view: options.view,
                        isDefault: !!route.isDefault
                    });
                });
                return;
            }

            // Register 1 route
            registerRoute(options);
        },

        registerBeforeLeaving = function () {
            sammy.before(/.*/, function () {
                // do anything needed before leaving...
            });
        },

        registerRoute = function (options) {

            if (!options.callback) {
                throw new Error('callback must be specified.');
            }

            if (options.isDefault) {
                defaultRoute = options.route;
                setupGet(options, '/');
            }

            setupGet(options);
        },

        setupGet = function (options, routeOverride) {

            var doNav, route = routeOverride || options.route;

            sammy.get(route, function (context) { //context is 'this'

                try {
                    store.save(config.stateKeys.lastView, context.path);
                } catch (e) {
                    // private browsing on Safari on iPad does not like this one...
                }

                // console.log("route is", options.route);

                doNav = options.callback(options.route);

                if (doNav && doNav.go) {

                    if (!doNav.secondary) {

                        // primary nav being triggered
                        // console.log("primary nav being triggered", options.route);

                        presenter.transitionToView(
                            $(options.view),
                            options.route,
                            options.imgOffset
                        );

                    } else {

                        // secondary nav being triggered

                        // console.log("secondary nav being triggered", options.route);

                        if (doNav.parentSectionHash !== doNav.newParentSectionHash) {
                            console.log("parent then subview");
                            options.callback('#/' + doNav.sections[0]);
                            presenter.transitionToParentThenSubView(
                                $(options.view),
                                options.route,
                                config.offsets[doNav.sections[0]],
                                doNav.sections[0],
                                doNav.sections[1]
                            );
                        } else if (doNav.sections.length === 2) {
                            // console.log("just subview");
                            presenter.transitionToSubView(doNav.sections[0], doNav.sections[1]);
                        }
                    }
                } else if (doNav){
                    presenter.transitionToParentSectionView();
                } else {
                    presenter.transitionToPlanogramView();
                }

                if (this.title && options.title) {
                    this.title(options.title.replace(/&amp;/g, '&'));
                }
            });
        },

        getUsableRoute = function (value) {

            return value && value.indexOf('#') !== -1 ? value : null;
        },

        run = function () {

            var url, addressBarUrl;

            url = store.fetch(config.stateKeys.lastView);
            addressBarUrl = sammy.getLocation();
            startupUrl = getUsableRoute(addressBarUrl) || getUsableRoute(url) || defaultRoute;
            sammy.run();
            registerBeforeLeaving();
            navigateTo(startupUrl);
        };

    return {
        navigateBack: navigateBack,
        navigateTo: navigateTo,
        register: register,
        run: run
    };

});