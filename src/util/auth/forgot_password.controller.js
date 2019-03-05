(function () {
  'use strict';
  angular
    .module('util.auth')
    .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

  ForgotPasswordCtrl.$inject = ['forgotPasswordFactory', 'logger', '$scope']
  function ForgotPasswordCtrl(forgotPasswordFactory, logger, $scope) {
    $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';

    var vm = this;
    vm.forgotForm = {};

    vm.forgotPassword = function(phoneNo) {
    	if (vm.forgotForm.$invalid) {
            
            validationFactory.validate(vm.forgotForm);
            return;
          }else{
		
		forgotPasswordFactory.forgotPassword(phoneNo).then(function(response){
    		if (response.status == 200) {
    			logger.info('Password reset Successfully');
    		}
    		else if (response.status == 400) {
				logger.error(response.data.message,
						'error');
				vm.errorMessage = response.data.message;
    		}
    		//$state.reload();
    	});
    	console.log("password reset" + phoneNo);
    }
    }
    

//    self.toggleStatus = function (id) {
//      clientFactory.changeStatus(id).then(function (response) {
//        if (response.status == 200) {
//          logger.info('Status Changed Successfully');
//        }
//        else if (response.status == -1) {
//          logger.error('Network Error');
//        }
//        else if (response.status == 404) {
//          logger.error('Client not found');
//        }
//        else {
//          logger.error('Backend error');
//        }
//        $state.reload();
//      });
//    };


  };
})();