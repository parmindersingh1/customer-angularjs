(function () {
  'use strict';
  angular
    .module('app.project')
    .controller('OrderCtrl', OrderCtrl);

  OrderCtrl.$inject = ['orderFactory', '$scope', '$state', '$stateParams', 'logger', '$window']
  function OrderCtrl(orderFactory, $scope, $state, $stateParams, logger, $window) {
    $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
    
    var vm = this;
    vm.products = [];
    vm.storeId = $stateParams.id;
    vm.showCheckout = false;
    vm.orderTotal = 0;
    console.log("store id "+$stateParams.id);
    vm.editorEnabled = false;
    
    vm.imgUrl = "images/photodune-196089-house-xs.jpg";
    vm.deliverTime = new Date();

    
    activate();


    function activate() {
      orderFactory.getOrderProducts().then(function(response) {
        vm.products = response;
        console.log(vm.products);
        orderSum();
      });

     
        vm.deliveryAddress = {
          addressLineOne: '1234 Example Street',
          addressLineTwo: 'xyz',
          city: 'Antartica',
          state: 'Example',
          pincode: '0987',
          phone: '(123) 456-7890',
          email: 'example@example.com',
          first_name: 'hello',
          last_name: 'world'
        }                        
        	
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
      if (typeof(product.quantity) == 'string'){
        product.quantity = parseInt(product.quantity)
      }
      product.quantity += 1;
      orderSum();
    }

    vm.sub = function(product) {
      if(product.quantity > 0) {
        product.quantity -= 1;
      }      
      orderSum();
    }

     vm.onQtyChange = function(product) {
        orderSum();
    }

    vm.order = function() {
      orderFactory.emptyCart().then(function(response){
         logger.info("Order Created Successfully");
         $window.history.back();
      })
    }
    	
    function orderSum() {
      vm.orderTotal = 0;
      _.forEach(vm.products, function(product){
        console.log("**  "+parseFloat(product.mrp) * parseInt(product.quantity));
          vm.orderTotal += parseFloat(product.mrp) * parseInt(product.quantity);
      } )
    }  

    vm.enableEditor = function() {
      vm.editorEnabled = true;
    };
    
    vm.disableEditor = function() {
      vm.editorEnabled = false;
    };
    
    vm.save = function() {
      vm.disableEditor();
    };
    	
   

  };
})();