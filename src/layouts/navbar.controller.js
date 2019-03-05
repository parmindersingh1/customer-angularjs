(function() {
  'use strict';

  angular
    .module('app.project')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', '$state', 'principal', 'logger', "__env"];
  /* @ngInject */
  function NavbarController($scope, $state, principal, logger, __env) {
    var vm = this;

    vm.signout = signout;


    function signout() {
      
      principal.signout().then(function(){        
        $state.go('front.signin');
      }, function(){
        
      });
    }

    activate();

    function activate() {
     console.log("activate");
    }  

   
  }
})();
