/*global define:true */

define('vm.planogram', ['knockout', 'data'], function (ko, data) {

    "use strict";

    var selectedPlanogram = ko.observable(),

        activate = function (route) {

            var parts = route.split("/"),
                sid = data.sectionById(parts[2]),
                pos = data.sectionPosition(sid),
                plano = data.sectionById(parts[2] + '-planograms');

            selectedPlanogram({
                caption: plano.pageContent.planograms[parts[3]].p_caption,
                section: parts[2],
                label: sid.label,
                item: parts[3],
                position: pos,
                shelves: plano.pageContent.planograms[parts[3]].shelves
            });
        },

        currentPlanogram = ko.computed(function () {

            var current = 0, kount = 0;

            if (selectedPlanogram()) {
                ko.utils.arrayFirst(data.planograms(), function(item) {
                    kount++;
                    if (selectedPlanogram().section == item.section && selectedPlanogram().item == item.position) {
                        current = kount;
                    }
                });
            }
            return current - 1;
        }),

        prevPlanogram = ko.computed(function () {

            var plano;

            if (currentPlanogram() === 0) {
                plano = data.planograms()[data.planograms().length - 1];
            } else {
                plano = data.planograms()[currentPlanogram() - 1];
            }
            return plano;
        }),

        nextPlanogram = ko.computed(function () {

            var plano;

            if (currentPlanogram() === data.planograms().length - 1) {
                plano = data.planograms()[0];
            } else {
                plano = data.planograms()[currentPlanogram() + 1];
            }
            return plano;
        }),

        goBack = function () {
            window.history.back();
        },

        linkText = ko.observable("view product details"),

        _previousImgSrc = ko.observable();

    return {
        activate: activate,
        selectedPlanogram: selectedPlanogram,
        goBack: goBack,
        data: data,
        planograms: data.planograms,
        nextPlanogram: nextPlanogram,
        prevPlanogram: prevPlanogram,
        currentPlano: currentPlanogram,
        linkText: linkText
    };

});