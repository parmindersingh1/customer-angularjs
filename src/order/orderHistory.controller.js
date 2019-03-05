(function () {
  'use strict';
  angular
    .module('app.project')
    .controller('OrderHistoryCtrl', OrderHistoryCtrl);

  OrderHistoryCtrl.$inject = ['orderFactory', '$scope', '$state', '$stateParams', 'logger', '$window', 'NgTableParams', '$filter']
  function OrderHistoryCtrl(orderFactory, $scope, $state, $stateParams, logger, $window, NgTableParams, $filter) {
    $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
    
    var vm = this;
    
    vm.imgUrl = "images/photodune-196089-house-xs.jpg";
    vm.deliverTime = new Date();
    vm.searchParams = {};
    vm.currentPage = 1; // keeps track of the current page
    vm.pageSize = 10; // holds the number of items per page
    
    activate();


    function activate() {
      orderFactory.orderHistory().then(function(response) {
        vm.orders = response;       
      });
    }   	

    vm.tabChange = function(val) {
      if(val == 'open') {
        vm.searchParams.status = 'open';
      } else if(val == 'cancelled') {
        vm.searchParams.status = 'cancelled';        
      } else {
        vm.searchParams.status = '';        
      }
    }
    
    	
   

  };
})();