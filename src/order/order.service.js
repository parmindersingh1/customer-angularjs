(function() {
	'use strict';
	angular.module('app.project').factory('orderFactory', orderFactory);

	orderFactory.$inject = [ '$http', '__env', '$q', '$sessionStorage' ]
	function orderFactory($http, __env, $q, $sessionStorage) {
		var service = {};

		service.getOrderProducts = function() {
			var deferred = $q.defer();
        	var products = angular.fromJson($sessionStorage.orderProducts);
			deferred.resolve(products); 
			return deferred.promise;
		};
		
		service.emptyCart = function() {
			var deferred = $q.defer();
        	delete $sessionStorage.orderProducts;
			deferred.resolve(true); 
			return deferred.promise;
		};
		
		service.orderHistory = function() {
			var deferred = $q.defer();
        	
			deferred.resolve([
        		{
        			orderId: 'id-1',
        			orderDate: new Date(),
        			totalAmount: 2323,
        			store: {
        				storeName : "STORE 1",
					    storeSize : "SMALL",
					    storeType : "GROCERY"
        			},
        			status: 'open'
        		},
        		{
        			orderId: 'id-2',
        			orderDate: new Date(),
        			totalAmount: 1765,
        			store: {
        				storeName : "STORE 2",
					    storeSize : "SMALL",
					    storeType : "GROCERY"
        			},
        			status: 'open'        			
        		},
        		{
        			orderId: 'id-3',
        			orderDate: new Date(),
        			totalAmount: 3543,
        			store: {
        				storeName : "STORE 3",
					    storeSize : "SMALL",
					    storeType : "GROCERY"
        			},
        			status: 'cancelled'        			
        		}
        	]); 
			return deferred.promise;
		}
  
  		service.getOrder = function() {
  			var deferred = $q.defer();
  			var order = {
        			orderId: 'id-1',
        			orderDate: new Date(),
        			totalAmount: 2323,
        			subtotal:2000,
        			store: {
        				storeName : "STORE 1",
					    storeSize : "SMALL",
					    storeType : "GROCERY"
        			},
        			status: 'open',
        			lineItems: [
        				{
						    "_id" : "P_1",
						    "productName" : "DANOFF SCALP LOTION",
						    "mrp" : "199.00",
						    "quantity" : 5
						},
						{
						    "_id" : "P_2",
						    "productName" : "EFFIE 200MG",
						    "mrp" : "180.00",
						    "quantity" : 2
						}

        			],
        			deliveryAddress: {
			          addressLineOne: '1234 Example Street',
			          addressLineTwo: 'xyz',
			          city: 'Antartica',
			          state: 'Example',
			          pincode: '0987',
			          phone: '(123) 456-7890',
			          email: 'example@example.com',
			          first_name: 'hello',
			          last_name: 'world'
			        }
        		}

        	deferred.resolve(order); 
			return deferred.promise;	
  		}
        

		return service;
	}
	;
})();
