(function() {
  'use strict';

  angular
    .module('app.profile')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.profile',
        config: {
          url: '/profile',
          templateUrl: "src/profile/profile.html",
          controller: 'ProfileController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.changePassword',
        config: {
        	url: '/changePassword',
            templateUrl: "src/profile/changePassord.html",
            controller: 'ChangePasswordController',
            controllerAs: 'vm'
        }
      }
    ];
  }
})();
