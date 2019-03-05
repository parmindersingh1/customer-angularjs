(function() {
	'use strict';
	angular.module('app.profile').factory('profileFactory', profileFactory);

	profileFactory.$inject = [ '$http', '__env', '$q', '$sessionStorage' ]
	function profileFactory($http, __env, $q, $sessionStorage) {
		var service = {};

		service.findById = function() {
			var deferred = $q.defer();

			var user = $sessionStorage.currentUser;

			deferred.resolve(user); 
			return deferred.promise;
		};
		service.updatechangePassword = function(passwordData) {
			var deferred = $q.defer();
			deferred.resolve(true); 
			return deferred.promise;
			
		};

		return service;
	}
	;
})();
