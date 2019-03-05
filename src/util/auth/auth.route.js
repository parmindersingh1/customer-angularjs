(function() {
  'use strict';

  angular
    .module('util.auth')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [      
      {
        state: 'front.signin',
        config: {
          url: '/signin',
          templateUrl: "src/util/auth/login.html",
          controller: 'SigninController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.signout',
        config: {
          controller: 'SignoutController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'front.forgot',
        config: {
          url: '/forgot',
          fullPage : true,
          templateUrl: "src/util/auth/forgot_password.html",
          controller: 'ForgotPasswordCtrl',
          controllerAs: 'vm'
        }
      }

    ];
  }
})();
