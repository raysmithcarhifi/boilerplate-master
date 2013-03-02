/*global define: true */

define('config', [ 'toastr' ], function (toastr) {

    'use strict';

    var imageOffset = -980,

        title = 'ShelfHelp',

        toastrTimeout = 3000,

        offsets = {
            main: 0,
            laundry: -980,
            baby: -980 * 2,
            homecare: -980 * 3,
            health: -980 * 4,
            batteries: -980 * 5,
            info: -980 * 6
        },

        hashes = {
            main: '#/home',
            laundry: '#/laundry',
            baby: '#/baby',
            homecare: '#/homecare',
            health: '#/health',
            batteries: '#/batteries',
            info: '#/info',
            planogram: '#/planogram'
        },

        viewIds = {
            navbar: '#navbar-view',
            main: '#main-view',
            planogram: '#planogram'
        },

        imgOffsets = {
            main: 0 ,
            laundry: imageOffset,
            baby: imageOffset * 2,
            homecare: imageOffset * 3,
            health: imageOffset * 4,
            batteries: imageOffset * 5,
            info: imageOffset * 6,
            planogram: imageOffset * 7
        },

        messages = {
            viewModelActivated: 'viewmodel-activation'
        },

        stateKeys = {
            lastView: 'state.active-hash'
        },

        // storeExpirationMs = (1000 * 60 * 60 * 24), // 1 day
        storeExpirationMs = (1000 * 10), // 10 seconds

        throttle = 400,

        toasts = {
            errorGettingData: 'Could not retrieve data.  Please check the logs.',
            invalidRoute: 'Cannot navigate. Invalid route'
        },

        init = function () {
            toastr.options.timeOut = toastrTimeout;
            toastr.options.positionClass = 'toast-top-right-aligned';
        };

    init();

    return {
        title: title,
        throttle: throttle,
        hashes: hashes,
        viewIds: viewIds,
        messages: messages,
        imgOffsets: imgOffsets,
        stateKeys: stateKeys,
        storeExpirationMs: storeExpirationMs,
        logger: toastr,
        toasts: toasts,
        offsets: offsets
    };

});
