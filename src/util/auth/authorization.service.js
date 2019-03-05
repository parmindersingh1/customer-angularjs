(function () {
  'use strict';

  angular
    .module('util.auth')
    .factory('authorization', authorization);

  authorization.$inject = ['$rootScope', '$state', 'principal', 'logger'];

  /* @ngInject */
  function authorization($rootScope, $state, principal, logger) {
    var service = {
      authorize: authorize
    };
    return service;

    ////////////////

    function authorize() {
      return principal.identity()
        .then(identityResolved, identityResolvedFailure);
    }

    function identityResolved() {
     
    }

    function identityResolvedFailure() {
      logger.error("User is not logged in. Redirecting to Login Page");
      routeToSignin();
    }

    function routeToSignin() {
      $rootScope.returnToState = $rootScope.toState;
      $rootScope.returnToStateParams = $rootScope.toStateParams;
      $state.go('front.signin');
    }
  }

})();

