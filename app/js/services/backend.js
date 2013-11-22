(function() {

	var services = angular.module('NarpApp.services.backend', []);

	services.value('version', '0.1');

	services.factory('steam', function($http, localStorageService) {
		
		saveUserLocal = function(response) {
			localStorageService.add('logindata', JSON.stringify(response));
			console.log("backend-save", response);
			return response.data;
		};
		isUserLooged = function() {
			var logindata = JSON.parse(localStorageService.get('logindata'));
			console.log('Login data: ',logindata);
			return !!logindata? logindata : 'guest';
		};
		removeUserLocal = function(){
			var logindata = JSON.parse(localStorageService.get('logindata'));
			console.log('Login data: ',logindata);
			localStorageService.remove('logindata');
		}
		
		return {
			saveUserLocal :saveUserLocal,
			isUserLooged : isUserLooged,
			removeUserLocal : removeUserLocal
		};
	});

}).call(this);
