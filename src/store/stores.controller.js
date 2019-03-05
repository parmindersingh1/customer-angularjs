(function () {
  'use strict';
  angular
    .module('app.project')
    .controller('StoreListCtrl', StoreListCtrl);

  StoreListCtrl.$inject = ['storeFactory', 'principal', '$scope', '$state', 'logger']
  function StoreListCtrl(storeFactory, principal, $scope, $state, logger) {
    $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar st-effect-rxs-1 sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                           
    var vm = this;
    vm.storeId = "storeId";

     vm.signin = signin;

    function signin() {
      
      principal.signin().then(function(user){
        console.log("user is ",user);
        
        $state.go('map.stores');
      }, function(){
        
      });
    }
    activate();

    function activate() {
    	
    
        	
    }   	
    	
    	
   

  };
})();