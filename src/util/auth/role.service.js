(function () {
  'use strict';

  angular
    .module('util.auth')
    .factory('role', role);

  role.$inject = ['$localStorage', '$rootScope', 'principal',  'ACCESS_LEVEL', 'userService'];

  /* @ngInject */
  function role($localStorage, $rootScope, principal,  ACCESS_LEVEL, userService) {  
    var service = {
      // hasPermission: hasPermission,
      // roleHasPermission: roleHasPermission,
      isAdminRole: isAdminRole,
      hasRole: hasRole,
      isManufacturerOwner: isManufacturerOwner,
      isStoreOwner: isStoreOwner,
      isWarehouseOwner: isWarehouseOwner,
      isDistributorOwner: isDistributorOwner,
      getCurrentUser: getCurrentUser
    };
    return service;

    // function hasPermission(controller, method) {
    //   var roles = $rootScope.currentUser.roles;
    //   for (var i = 0; i < roles.length; i++) {
    //     if (this.roleHasPermission(roles[i], controller, method)) return true;        
    //   }
    //   return false;
    // }

    // function roleHasPermission(role, controller, method) {
    //     return AUTH_RULES[role][controller].indexOf(method) != -1 ;
    // }

    
    function isAdminRole() {      
      var roles = userService.getUserRoles();
      if(roles) {
        return _.findIndex(roles, function(role) {
          return _.endsWith(role, 'ADMIN') && role !== 'SALES_ADMIN'
        }) >= 0;  
      } else {
        return false;
      }  
        
    }

    function hasRole(role) {     
      var roles = userService.getUserRoles(); 
      if(roles) {
        return roles.indexOf(role) != -1; 
      } else {
        return false;
      }  
    }

    function isManufacturerOwner(manufacturerId) { 
      var currentUser = userService.getUser();     
      if(currentUser) {
        return this.hasRole(ACCESS_LEVEL.MANUFACTURER_OWNER) && currentUser.manufacturer === manufacturerId;
      } else {
        return false;
      }
    }

    function isStoreOwner(storeId) {    
      var currentUser = userService.getUser();  
      if(currentUser) {
        return this.hasRole(ACCESS_LEVEL.STORE_OWNER) && currentUser.store === storeId;
      } else {
        return false;
      }
    }

    function isWarehouseOwner(warehouseId) {  
      var currentUser = userService.getUser();    
      if(currentUser) {
        return this.hasRole(ACCESS_LEVEL.WAREHOUSE_OWNER) && currentUser.warehouse === warehouseId;
      } else {
        return false;
      }
    }

    function isDistributorOwner(distributorId) {     
      var currentUser = userService.getUser(); 
      if(currentUser) {
        return this.hasRole(ACCESS_LEVEL.DISTRIBUTOR_OWNER) && currentUser.distributor === distributorId;
      } else {
        return false;
      }
    }

    function hasOwnerRole(role) {
      var roles = userService.getUserRoles();
      if(roles) {
        return _.findIndex(roles, function(role) {
          return _.endsWith(role, 'OWNER')
        }) >= 0; 
      } else {
        return false;
      }
    }

    function getCurrentUser() {
      return userService.getUser();
    }
   
  }

})();

