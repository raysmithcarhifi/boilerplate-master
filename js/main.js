/*global require: true */

require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'vendor/jquery-1.9.1.min',
        'knockout': 'vendor/knockout-2.2.1',
        'activity': 'vendor/knockout.activity',
        'amplify': 'vendor/amplify.min',
        'bootstrap': 'vendor/bootstrap.min',
        'domReady': 'vendor/domReady',
        'sammy': 'vendor/sammy-latest.min',
        'sammy-title': 'vendor/sammy.title',
        'toastr': 'vendor/toastr',
        'plugins': 'plugins'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'amplify': {
            deps: ['jquery'],
            exports: 'amplify'
        },
        'activity': {
            deps: [ 'jquery', 'knockout' ],
            exports: 'jquery'
        },
        'sammy': {
            deps: ['jquery'],
            exports: 'Sammy'
        },
        'sammy-title': {
            deps: ['sammy'],
            exports: 'Sammy'
        },
        'plugins': {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
    //, urlArgs: "bust=" + (new Date()).getTime()
});

require(['jquery', 'knockout', 'bootstrapper', 'domReady!', 'bootstrap', 'plugins', 'activity', 'amplify'], function ($, ko, bootstrapper) {

    'use strict';

    bootstrapper.run();

});

