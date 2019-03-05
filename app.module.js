(function(){
    'use strict';

    window.app = angular.module('app', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.utils',
        'ui.jq',
        'ngAnimate',
        'ui.bootstrap',
        "util.logger",
        "util.auth",
        "util.env",
        "util.error",
        "util.exception",
        "util.router",
        "app.project",
        "app.profile",
        "ngStorage",
        "ngTable"
    ]);

    var app = angular.module('app')
        .config(
        [ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $interpolateProvider.startSymbol('[[');
                $interpolateProvider.endSymbol(']]');
            }
        ]);

})();