/*global define: true */

define('presenter', [ 'jquery' ], function ($) {

    'use strict';

    var slideContentAnimationDuration = 1500,

        slideArrowAnimationDuration = 1000,

        slideSubsectionAnimationDuration = 400,

        entranceThemeTransition = function ($view) {

            _resetMainView();

            $('.view').hide();

            $view.css({
                display: 'block',
                visibility: 'visible'
            });
        },

        highlightActiveView = function (route) {

            // Reset top level nav links
            // Find all NAV links by CSS classname
            var $navmenu, $sidenavmenu;

            $navmenu = $('.mainnav');
            $sidenavmenu = $('.sidenav');

            $navmenu.find('a').removeClass('active');
            $sidenavmenu.find('a').removeClass('active');

            if (route) {
                var match = route[0] === '/' ? route.substring(1) : route;
                // Highlight the selected nav that matches the route
                $navmenu.find('a[href="' + match + '"]').addClass('active');
                $sidenavmenu.find('a[href="' + match + '"]').addClass('active');
            }
        },

        toggleActivity = function (show) {
            $('#busyindicator').activity(show);
        },

        transitionToParentThenSubView = function ($view, route, imgOffset, section, subsection) {
            transitionToView($view, '#/' + section, imgOffset);
            transitionToSubView(section, subsection);
        },

        transitionToSubView = function (section, subsection) {

            var $selector;

            _resetMainView();

            $('.subsection').hide();

            $('.sidenav li a').removeClass('active');
            $('.sidenav li a.' + section + '-' + subsection).addClass('active');

            $selector = $('#subsection-' + section + '-' + subsection);
            $selector.css({ marginTop: '+=300px' }).show().animate({ marginTop: '-=300px' }, slideSubsectionAnimationDuration);
        },

        transitionToParentSectionView = function () {

            _resetMainView();

            $('.subsection').hide();
            $('.subsection:first').css({ marginTop: '+=300px' }).show().animate({ marginTop: '-=300px' }, slideSubsectionAnimationDuration);
        },

        transitionToView = function ($view, route, imgOffset) {

            toggleActivity(true);

            $('.subsection').hide();
            $('.subsection:first').show();

            entranceThemeTransition($view);

            highlightActiveView(route);

            _animateContent($view, imgOffset);
            _animateArrows($view);

            toggleActivity(false);
        },

        transitionToPlanogramView = function () {
            $('#wrap').hide();
            $('#planogram').show();


            var targets = $('[rel~=tooltippy]'),
                target = false,
                tooltip = false,
                title = false;

            targets.bind('mouseenter', function () {
                target = $(this);
                var tip = target.attr('title'), init_tooltip;
                tooltip = $('<div id="tooltip"></div>');

                if (!tip || tip === '') {
                    return false;
                }

                target.removeAttr('title');
                tooltip.css('opacity', 0)
                    .html(tip)
                    .appendTo('body');

                init_tooltip = function () {

                    if ($(window).width() < tooltip.outerWidth() * 1.5) {
                        tooltip.css('max-width', $(window).width() / 2);
                    } else {
                        tooltip.css('max-width', 340);
                    }

                    var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                        pos_top = target.offset().top - tooltip.outerHeight() - 20;

                    if (pos_left < 0) {
                        pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                        tooltip.addClass('left');
                    } else {
                        tooltip.removeClass('left');
                    }

                    if (pos_left + tooltip.outerWidth() > $(window).width()) {
                        pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                        tooltip.addClass('right');
                    }
                    else {
                        tooltip.removeClass('right');
                    }

                    if (pos_top < 0) {
                        pos_top = target.offset().top + target.outerHeight();
                        tooltip.addClass('top');
                    }
                    else {
                        tooltip.removeClass('top');
                    }

                    tooltip.css({ left: pos_left, top: pos_top })
                        .animate({ opacity: 1 }, 150);
                };

                init_tooltip();

                $(window).resize(init_tooltip);

                var remove_tooltip = function () {
                    tooltip.animate({ opacity: 0 }, 150, function () {
                        $(this).remove();
                    });

                    target.attr('title', tip);
                };

                target.bind('mouseleave', remove_tooltip);
                tooltip.bind('click', remove_tooltip);
            });

        },

        _resetMainView = function () {
            $('#wrap').show();
            $('#planogram').hide();
        },

        _animateArrows = function ($view) {

            var $leftArrow = $view.find('.arrow-left'),
                $rightArrow = $view.find('.arrow-right');

            $leftArrow.css({
                left: '-350px'
            }).animate({left: 0}, slideArrowAnimationDuration);

            $rightArrow.css({
                right: '-350px'
            }).animate({right: 0}, slideArrowAnimationDuration);

        },

        _animateContent = function ($elem, imgOffset) {

            $elem.find('.sidenav-panel').css({ marginTop: '-610px' }).animate({ marginTop: '0px' }, slideContentAnimationDuration);

            $elem.find('.content-panel').css({ marginTop: '610px' }).animate({ marginTop: '0px' }, slideContentAnimationDuration);

            $elem.find('.slider-background-content').css({ marginTop: '610px' }).animate({ marginTop: '0' }, slideContentAnimationDuration);

            $elem.find('.slider-background-sidenav').css({ marginTop: '-610px' }).animate({ marginTop: '0' }, slideContentAnimationDuration);

            $('#maincontainer').stop().animate({
                backgroundPositionX: imgOffset + 'px',
                backgroundPositionY: '100%'
            }, slideContentAnimationDuration / 3);

        };


    return {
        transitionToView: transitionToView,
        toggleActivity: toggleActivity,
        transitionToSubView: transitionToSubView,
        transitionToParentSectionView: transitionToParentSectionView,
        transitionToParentThenSubView: transitionToParentThenSubView,
        transitionToPlanogramView: transitionToPlanogramView
    };

});

