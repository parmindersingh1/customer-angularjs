(function() {
  'use strict';

  angular
    .module('app.project')
    .controller('FrontController', FrontController);

  FrontController.$inject = ['$scope', '$state', 'principal', 'logger', "__env"];
  /* @ngInject */
  function FrontController($scope, $state, principal, logger, __env) {
    var vm = this;

    vm.signin = signin;
    vm.signout = signout;

    function signin() {
    	
		  principal.signin().then(function(user){
        console.log("user is ",user);
		    
		    $state.go('map.stores');
		  }, function(){
		    
		  });
    }

    function signout() {
      
      principal.signout().then(function(){        
        $state.go('front.signin');
      }, function(){
        
      });
    }

    activate();

    function activate() {
      //TODO to be removed;
      vm.mobile = __env.user;
      vm.password = __env.password;
      vm.rememberMe = false;
      vm.validFromServer = true;
    }  

   
  }
})();
