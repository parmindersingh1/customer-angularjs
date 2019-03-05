(function () {
  'use strict';

  angular
    .module('util.auth')
    .factory('principal', principal);

  principal.$inject = ['$q', '$http', '$timeout', 'logger', '$localStorage', '$rootScope', '__env', 'userService', '$sessionStorage'];

  /* @ngInject */
  function principal($q, $http, $timeout, logger, $localStorage, $rootScope, __env, userService, $sessionStorage) {
     var _identity = undefined;
     var _authenticated = false;

    var service = {
      authenticate: authenticate,
      identity: identity,
      isAuthenticated: isAuthenticated,

      isIdentityResolved: isIdentityResolved,
      isInAnyRole: isInAnyRole,
      isInRole: isInRole,

      signin: signin,
      signout: signout
    };
    return service;
    
    function isIdentityResolved() {
    	return angular.isDefined(_identity);
    }

    function isAuthenticated() {
    	return _authenticated;
    }
    
    function isInRole(role) {
        if (!_authenticated || !_identity.roles) return false;
        return _identity.roles.indexOf(role) != -1;
    }
    
    function isInAnyRole(roles) {
        if (!_authenticated || !_identity.roles) return false;
        for (var i = 0; i < roles.length; i++) {
          if (this.isInRole(roles[i])) return true;
        }
        return false;
    }
    
    function authenticate(identity) {
        _identity = identity;
        _authenticated = identity != null;
    }
    
    function identity(force) {
    	console.dir(_identity);
    	var deferred = $q.defer();
        if (force === true) _identity = undefined;
        // check and see if we have retrieved the identity data from the server.
		// if we have, reuse it by immediately resolving
        _identity = $sessionStorage.currentUser;
        if (angular.isDefined(_identity)) {
          deferred.resolve(_identity);
          return deferred.promise;
        }
       else {
       	deferred.reject(_identity);
       	return deferred.promise;
       }
    	
    }
    
    function signin() {
    	var deferred = $q.defer();
      var user = {
          first_name : "Rajan",
          last_name : "Punchouty",
            email : "rajan@punchouty.com",
            mobile : "9717744392",
          address : {
              addrressLineOne : "h.no-45/12",
              addrressLineTwo : "Block- C",
              city : "Sonipat",
              state : "Haryana",
              pincode : "122018"
          }
      };
       $sessionStorage.currentUser = user;
       deferred.resolve(user);
		
		   return deferred.promise;
    }
    
    function signout() {
    	var deferred = $q.defer();
    	delete $sessionStorage.currentUser;
    	deferred.resolve(true);
    		   
    	return deferred.promise;
    }
  }

})();


