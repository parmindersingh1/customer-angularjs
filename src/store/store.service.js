(function() {
	'use strict';
	angular.module('app.project').factory('storeFactory', storeFactory);

	storeFactory.$inject = [ '$http', '__env', '$q', '$sessionStorage']
	function storeFactory($http, __env, $q, $sessionStorage) {
		var service = {};

		// service.findById = function(id) {
		// 	var promise = $http.get(__env.dataApi + "/users/" + id)
		// 			.then(function(response) {
		// 				console.log(response);
		// 				return response;
		// 			}, function(error) {
		// 				console.log(error);
		// 				return error;
		// 			});
		// 	return promise;
		// };
		
		service.products = [
			
				/* 2 */
				{
				    "_id" : "P_1",
				    "productName" : "DANOFF SCALP LOTION",
				    "mrp" : "199.00"
				},

				/* 3 */
				{
				    "_id" : "P_2",
				    "productName" : "EFFIE 200MG",
				    "mrp" : "180.00"
				},

				/* 4 */
				{
				    "_id" : "P_3",
				    "productName" : "REFRAZ M",
				    "mrp" : "41.60"
				},

				/* 5 */
				{
				    "_id" : "P_4",
				    "productName" : "SVOFLOX 200MG",
				    "mrp" : "51.00"
				},

				/* 6 */
				{
				    "_id" : "P_5",
				    "productName" : "SVOFLOX 400MG",
				    "mrp" : "88.50"
				},

				/* 7 */
				{
				    "_id" : "P_6",
				    "productName" : "WIDECAL M",
				    "mrp" : "35.00"
				},

				/* 8 */
				{
				    "_id" : "P_7",
				    "productName" : "AB NUT",
				    "mrp" : "148.50"
				},

				/* 9 */
				{
				    "_id" : "P_8",
				    "productName" : "AB NUT SYRUP",
				    "mrp" : "144.00"
				},

				/* 10 */
				{
				    "_id" : "P_9",
				    "productName" : "AP KIND PLUS",
				    "mrp" : "69.30"
				},

				/* 11 */
				{
				    "_id" : "P_10",
				    "productName" : "HUNEMIA",
				    "mrp" : "99.00"
				},

				/* 12 */
				{
				    "_id" : "P_11",
				    "productName" : "N8 LC",
				    "mrp" : "90.00"
				},

				/* 13 */
				{
				    "_id" : "P_12",
				    "productName" : "PYLORIPAN DSR",
				    "mrp" : "79.20"
				}

				

				
		]
  
        service.checkout = function(products) {
        	var deferred = $q.defer();
        	$sessionStorage.orderProducts=angular.toJson(products);
			deferred.resolve(true); 
			return deferred.promise;
        }

        service.getOrderProducts = function() {
			var deferred = $q.defer();
        	var products = angular.fromJson($sessionStorage.orderProducts);
			deferred.resolve(products); 
			return deferred.promise;
		};

		return service;
	}
	;
})();
