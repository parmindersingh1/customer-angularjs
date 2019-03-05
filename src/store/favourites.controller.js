(function () {
  'use strict';
  angular
    .module('app.project')
    .controller('FavouriteCtrl', FavouriteCtrl);

  FavouriteCtrl.$inject = ['favouriteFactory', '$scope', '$state', 'logger']
  function FavouriteCtrl(favouriteFactory, $scope, $state, logger) {
    $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                           
    var vm = this;
    vm.stores = [];
    activate();

    function activate() {
    	
      vm.stores = favouriteFactory.stores;
        	
    }   	
    	
    	
   

  };
})();