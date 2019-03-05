(function() {
	'use strict';
	angular.module('app.project').factory('favouriteFactory', favouriteFactory);

	favouriteFactory.$inject = [ '$http', '__env', '$q']
	function favouriteFactory($http, __env, $q) {
		var service = {};

		service.stores = [
			{
				"storeId": "STORE_1",
				"storeName" : "STORE 1",
			    "storeSize" : "SMALL",
			    "storeType" : "GROCERY",
			    "address" : {
			        "addrressLineOne" : "fghj",
			        "addrressLineTwo" : "dfgh",
			        "city" : "sdfg",
			        "state" : "dfg",
			        "pincode" : "234567"
			    },
			    "primaryContact": {
				    "fullName" : "John doe",
				    "email" : "john@example.com",
				    "mobile" : "91111111111"
				}   
			},
			{
				"storeId": "STORE_2",				
				"storeName" : "STORE 2",
			    "storeSize" : "SMALL",
			    "storeType" : "GROCERY",
			    "address" : {
			        "addrressLineOne" : "fghj",
			        "addrressLineTwo" : "dfgh",
			        "city" : "sdfg",
			        "state" : "dfg",
			        "pincode" : "234567"
			    },
			    "primaryContact": {
				    "fullName" : "Some body",
				    "email" : "some@example.com",
				    "mobile" : "9222222222"
				}   
			}
		];
  
       

		return service;
	}
	;
})();
