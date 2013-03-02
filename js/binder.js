/*global define: true */

define('binder', [ 'jquery', 'knockout', 'config', 'vm' ], function ($, ko, config, vm) {

    'use strict';

    var ids = config.viewIds,

        bind = function () {
            ko.applyBindings(vm.home, getView(ids.navbar));
            ko.applyBindings(vm.home, getView(ids.main));
            ko.applyBindings(vm.planogram, getView(ids.planogram));
        },

        getView = function (viewName) {
            return $(viewName).get(0);
        };

    return {
        bind: bind
    };

});