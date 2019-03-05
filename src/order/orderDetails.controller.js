(function () {
  'use strict';
  angular
    .module('app.project')
    .controller('OrderDetailsCtrl', OrderDetailsCtrl);

  OrderDetailsCtrl.$inject = ['orderFactory', '$scope', '$state', '$stateParams', 'logger', '$window', '$sessionStorage', '$filter']
  function OrderDetailsCtrl(orderFactory, $scope, $state, $stateParams, logger, $window, $sessionStorage, $filter) {
    $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
    
    var vm = this;
    
    vm.imgUrl = "images/photodune-196089-house-xs.jpg";
    vm.deliverTime = new Date();
    vm.searchParams = {};
    vm.currentPage = 1; // keeps track of the current page
    vm.pageSize = 10; // holds the number of items per page
    
    activate();


    function activate() {
      orderFactory.getOrder().then(function(response) {
        vm.order = response;       
      });


    }  
   
    vm.reOrder = function() {
      $sessionStorage.orderProducts=angular.toJson(vm.order.lineItems);
      $state.go('app.store', {id: vm.order.orderId});
    }

  };
})();