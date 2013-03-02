/*global define: true */

define('bootstrapper', [ 'jquery', 'route-config', 'presenter', 'binder' ],

    function ($, routeConfig, presenter, binder) {

        'use strict';

        var run = function () {

            if($.browser.mobile){
                $('html').addClass('mobile_device');
                var viewport = document.querySelector("meta[name=viewport]");
                viewport.setAttribute('content', 'width=device-width; initial-scale=0.33; maximum-scale=0.8; user-scalable=1;');
            } else {
                console.log("not a mobile");
            }

            presenter.toggleActivity(true);

            $.when(
                binder.bind()
            )
            .done(routeConfig.register)
            .always(function () {
                presenter.toggleActivity(false);
            });

        };

        return {
            run: run
        };

    });
