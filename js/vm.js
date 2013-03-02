/*global define:true */

define('vm', ['vm.home', 'vm.planogram'], function (home, planogram) {

    "use strict";

    return {
        home: home,
        planogram: planogram,
        parentSections: home.parentSections
    };
});