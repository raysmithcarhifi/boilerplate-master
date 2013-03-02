/*global define: true */

define('route-config', ['config', 'router', 'vm', 'data'], function (config, router, vm, data) {

    'use strict';

    var logger = config.logger,

        register = function () {

            var item, routeData, i;

            routeData = [  {
                view: config.viewIds.main,
                route: config.hashes.main,
                imgOffset: config.imgOffsets.main,
                title: '- Home',
                callback: vm.home.activate,
                isDefault: true
            }];

            $.each(vm.parentSections.slice(1, vm.parentSections.length), function(idx, section) {

                routeData.push({
                    view: config.viewIds.main,
                    route: config.hashes[section.id],
                    imgOffset: config.imgOffsets[section.id],
                    title: '- ' + section.label,
                    callback: vm.home.activate
                });

                $.each(data.subSectionsForParent(section), function(idx, subsection) {

                    routeData.push({
                        view: config.viewIds.main,
                        route: config.hashes[section.id] + "/" + subsection.key,
                        title: '',
                        callback: vm.home.activate
                    });

                    if (subsection.key === 'planograms') {

                        $.each(subsection.pageContent.planograms, function(idx, planogram) {

                            routeData.push({
                                view: config.viewIds.planogram,
                                route: '#/planogram/' + section.id + '/' + idx,
                                title: ' - Planograms',
                                callback: vm.planogram.activate
                            });

                        });
                    }

                });

            });

            // invalid routes
            routeData.push({
                view: '',
                route: /.*/,
                title: '',
                callback: function () {
                    // logger.error(config.toasts.invalidRoute);
                    window.location.replace(location.origin + location.pathname + '404.html');
                }
            });

            for (i = 0; i < routeData.length; i++) {
                router.register(routeData[i]);
            }

            router.run();
        };

    return {
        register: register
    };
});