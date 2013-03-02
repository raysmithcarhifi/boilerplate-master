/*global define:true */

define('vm.home', ['knockout', 'router', 'data'], function (ko, router, data) {

    "use strict";

    var selectedParentSection = ko.observable(data.parentSections()[0]),

        setSelectedParentSection = function (section) {
            selectedParentSection(section);
        },

        selectedSubsection = ko.observable(),

        setSelectedSubsection = function (section) {
            selectedSubsection(section);
        },

        selectedSectionSubsections = ko.computed(function () {
            return data.subSectionsForParent(selectedParentSection());
        }),

        selectedSectionAllSections = ko.computed(function () {
            var combinedSections = [];

            if (selectedSectionSubsections() && selectedSectionSubsections().length) {
                combinedSections = [selectedParentSection()];
                ko.utils.arrayForEach(selectedSectionSubsections(), function (item) {
                    combinedSections.push(item);
                });
            }

            return combinedSections;
        }),

        sectionSubsections = function () {
            return data.subSectionsForParent(selectedParentSection());
        },

        isHomePage = ko.computed(function () {
            return selectedParentSection() && selectedParentSection().id === 'home';
        }),

        isInfoPage = ko.computed(function () {
            return selectedParentSection() && selectedParentSection().id === 'info';
        }),

        isContentPage = ko.computed(function () {
            return !isHomePage() && !isInfoPage();
        }),

        arrayToLines = function (item) {
            var str = item;

            if ($.isArray(item)) {
                str = item.join('<br>');
            }

            return str;
        },

        activate = function (route) {

            var sections, doNav, routeParts;

            routeParts = route.slice(2, route.length);

            sections = routeParts.split("/");

            doNav = {
                go: true,
                secondary: false,
                parentSectionHash: selectedParentSection().hash(),
                newParentSectionHash: '',
                sections: sections
            };

            if (sections.length === 1) {
                if (sections[0] !== 'home' && '#/'+ sections[0] === selectedParentSection().hash()) {
                    doNav.go = false;
                } else {
                    setSelectedParentSection(data.sectionById(sections[0]));
                    doNav.newParentSectionHash = selectedParentSection().hash();
                }
                setSelectedSubsection(undefined);
            } else if (sections.length === 2) {
                doNav.secondary = true;
                doNav.newParentSectionHash = data.sectionById(sections[0]).hash();
                setSelectedSubsection(data.sectionById(sections[0] + "-" + sections[1]));
            }

            return doNav;
        },

        nextHash = function () {
            var next = data.nextSection(selectedParentSection());
            if (next && next.hash()) {
                return next.hash();
            }
        },

        prevHash = function () {
            var prev = data.prevSection(selectedParentSection());
            if (prev && prev.hash()) {
                return prev.hash();
            }
        },

        leftArrow = ko.computed(function () {
            var prevSection,
                arrow = 'arrow-left sprite sprite-arrow-null';

            if (selectedParentSection() && selectedParentSection().id !== 'home') {
                prevSection = data.prevSection(selectedParentSection());
                arrow = 'arrow-left sprite sprite-arrow-left-' + prevSection.id;
            }

            return arrow;
        }),

        rightArrow = ko.computed(function () {
            var nextSection,
                arrow = 'arrow-right sprite sprite-arrow-null';

            if (selectedParentSection() && selectedParentSection().id !== 'info') {
                nextSection = data.nextSection(selectedParentSection());
                arrow = 'arrow-right sprite sprite-arrow-right-' + nextSection.id;
            }

            return arrow;
        });

    return {
        parentSections: data.parentSections(),
        activate: activate,
        isHomePage: isHomePage,
        isInfoPage: isInfoPage,
        isContentPage: isContentPage,
        selectedSectionSubsections: selectedSectionSubsections,
        sectionSubsections: sectionSubsections,
        selectedParentSection: selectedParentSection,
        setSelectedParentSection: setSelectedParentSection,
        selectedSubsection: selectedSubsection,
        setSelectedSubsection: setSelectedSubsection,
        selectedSectionAllSections: selectedSectionAllSections,
        arrayToLines: arrayToLines,
        leftArrow: leftArrow,
        rightArrow: rightArrow,
        nextHash: nextHash,
        prevHash: prevHash
    };

});