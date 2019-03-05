(function() {
	'use strict';

	angular.module('app.profile').controller('ProfileController',
			ProfileController);

	ProfileController.$inject = [ 'logger', '$http', '$stateParams','$timeout',
			'$rootScope', '$state', 'profileFactory', '$scope', 'principal' ];
	/* @ngInject */
	function ProfileController(logger, $http, $stateParams, $timeout, $rootScope, $state,
			profileFactory, $scope, principal) {
        $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';

		var vm = this;
		activate();


		function activate() {
			console.log('In Activate')
			profileFactory.findById().then(function(response){
				vm.user = angular.copy(response);
			})		

		}

		vm.changePassword =  function() {
			console.log("changePassword");
		}

	}
})();