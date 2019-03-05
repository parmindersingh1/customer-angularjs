(function() {
  'use strict';

  angular
    .module('util.auth')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', '$state', 'principal', 'logger', "__env"];
  /* @ngInject */
  function SigninController($scope, $state, principal, logger, __env) {
    var vm = this;

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
      //TODO to be removed;
      vm.mobile = __env.user;
      vm.password = __env.password;
      vm.rememberMe = false;
      vm.validFromServer = true;
    }  

   
  }
})();
