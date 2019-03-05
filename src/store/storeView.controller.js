(function () {
  'use strict';
  angular
    .module('app.project')
    .controller('StoreViewCtrl', StoreViewCtrl);

  StoreViewCtrl.$inject = ['storeFactory', '$scope', '$state', '$stateParams', 'logger', '$window']
  function StoreViewCtrl(storeFactory, $scope, $state, $stateParams, logger, $window) {
    $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
    
    var vm = this;
    vm.products = [];
    vm.selectedProducts = [];
    vm.showCheckout = false;
    console.log("store id "+$stateParams.id);
    
    vm.imgUrl = "images/photodune-196089-house-xs.jpg";
    
    
    activate();


    function activate() {
    	console.log(storeFactory.products);
      vm.products = storeFactory.products;

      storeFactory.getOrderProducts().then(function(response) {
        if(response) {
          vm.selectedProducts = response;
          console.log(vm.selectedProducts);
          check();
        }
      });
        	
    }   	

    vm.onProductSelect = function(product) {
      console.log("product is ",product);
      if(_.find(vm.selectedProducts, product)) {
        logger.error("product already in list");
      } else{
        vm.selectedProducts.push(product);
        vm.searchProduct = "";
      }
    }

    vm.add = function(product) {
      product.quantity += 1;
      vm.showCheckout = true;
    }

    vm.sub = function(product) {
      if(product.quantity > 0) {
        product.quantity -= 1;
      }     
      check();
    }

    vm.checkout = function() {
      console.log("Checkout ",vm.selectedProducts);
      
      storeFactory.checkout(vm.selectedProducts).then(function(response){
        vm.selectedProducts = [];
        vm.showCheckout = false;
        logger.info("Order Created Successfully");
        $state.go('app.order', {id: $stateParams.id});
      })
      
    }

    vm.onQtyChange = function(product) {
      if(product.quantity > 0) {
        vm.showCheckout = true;
      }
    }
    
    function check() {
      if(_.every(vm.selectedProducts, { 'quantity': 0 })){
         vm.showCheckout = false;
      } else {
        vm.showCheckout = true;        
      }
    } 	   

  };
})();