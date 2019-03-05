(function(){
    'use strict';

    angular.module('app')
        .run([ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config(
        [ '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    // .otherwise('/discover/map-full');
                    .otherwise('/front/property');

                $stateProvider
                    .state('discover', {
                        abstract: true,
                        url: '/discover',
                        templateUrl: 'src/layouts/maplayout.html'
                    })
                    .state('discover.map-full', {
                        url: '/map-full',
                        templateUrl: 'src/discover/map-full.html',
                        controller: ['$scope', function($scope, ){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs';
                        }]
                    })
                    .state('discover.map-listing-list', {
                        url: '/map-listing-list',
                        templateUrl: 'src/discover/map-listing-list.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    })
                    .state('discover.map-listing-grid', {
                        url: '/map-listing-grid',
                        templateUrl: 'src/discover/map-listing-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    })
                    .state('discover.listing', {
                        url: '/listing',
                        templateUrl: 'src/discover/listing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-13';
                        }]
                    })
                    .state('discover.listing-grid', {
                        url: '/listing-grid',
                        templateUrl: 'src/discover/listing-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-13';
                        }]
                    })
                    .state('discover.listing-map', {
                        url: '/listing-map',
                        templateUrl: 'src/discover/listing-map.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-13';
                        }]
                    });

                $stateProvider
                    .state('property', {
                        abstract: true,
                        url: '/property',
                        templateUrl: 'src/layouts/layout.html'
                    })
                    .state('property.map', {
                        url: '/map',
                        templateUrl: 'src/property/map.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    })
                    .state('property.property', {
                        url: '/property',
                        templateUrl: 'src/property/property.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-25pc-lg sidebar-r-30pc';
                        }]
                    })
                    .state('property.edit', {
                        url: '/edit',
                        templateUrl: 'src/property/edit.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    });

                $stateProvider
                    .state('map-features', {
                        abstract: true,
                        url: '/map-features',
                        templateUrl: 'src/layouts/layout.html'
                    })
                    .state('map-features.themes', {
                        url: '/themes',
                        templateUrl: 'src/map-features/themes.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs';
                        }]
                    })
                    .state('map-features.filters', {
                        url: '/filters',
                        templateUrl: 'src/map-features/filters.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1';
                        }]
                    })
                    .state('map-features.markers', {
                        url: '/markers',
                        templateUrl: 'src/map-features/markers.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    });

                $stateProvider
                    .state('front', {
                        abstract: true,
                        url: '/front',
                        templateUrl: 'src/layouts/frontlayout.html'
                    })
                    .state('front.home-map', {
                        url: '/home-map',
                        templateUrl: 'src/front/home-map.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.home-slider', {
                        url: '/home-slider',
                        templateUrl: 'src/front/home-slider.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.listing', {
                        url: '/listing',
                        templateUrl: 'src/front/listing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.listing-grid', {
                        url: '/listing-grid',
                        templateUrl: 'src/front/listing-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.property', {
                        url: '/property',
                        templateUrl: 'src/front/property.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    });
            }
        ]
    );

})();