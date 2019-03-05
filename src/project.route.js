 (function() {
  'use strict';

  angular
    .module('app.project')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app',
        config: {
          abstract: true,
          url: '/app',
          templateUrl: 'src/layouts/layout.html',
           resolve : {
              authorize: ['authorization',
                          function(authorization) {
                            return authorization.authorize();
                          }
                        ]
                      }
        }
      },
      {
        state: 'map',
        config: {
          abstract: true,
          url: '/app',
          templateUrl: 'src/layouts/maplayout.html'
        }
      },
      {
        state: 'map.stores',
        config: {
          url: '/stores',
          templateUrl: "src/store/stores.html",
          controller: 'StoreListCtrl',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.store',
        config: {
          url: '/store/:id',
          templateUrl: "src/store/store.html",
          controller: 'StoreViewCtrl',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.order',
        config: {
          url: '/order/store/:id',
          templateUrl: "src/order/order.html",
          controller: 'OrderCtrl',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.orderDetails',
        config: {
          url: '/order/:id',
          templateUrl: "src/order/orderDetails.html",
          controller: 'OrderDetailsCtrl',
          controllerAs: 'vm'
        }
      },
       {
        state: 'app.orderhistory',
        config: {
          url: '/order/history',
          templateUrl: "src/order/orderhistory.html",
          controller: 'OrderHistoryCtrl',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.favourites',
        config: {
          url: '/favourites/stores',
          templateUrl: "src/store/favourite.html",
          controller: 'FavouriteCtrl',
          controllerAs: 'vm'
        }
      }
     
    ];
  }
})();
