(function() {

	var services = angular.module('NarpApp.services.backend', []);

	services.value('version', '0.1');

	services.factory('steam', function($http, localStorageService) {
		
		saveUserLocal = function(response) {
			var saved = localStorageService.add('logindata', JSON.stringify(response));
			//console.log("Login data on save", saved);
			return saved;
		};
		isUserLooged = function() {
			var logindata = JSON.parse(localStorageService.get('logindata'));
			//console.log('Login data on query: ',logindata);
			return !!logindata ? true : false;
		};
		removeUserLocal = function(){
			localStorageService.remove('logindata');
			var logindata = JSON.parse(localStorageService.get('logindata'));
			//console.log('Login data afte remove: ',logindata);
		}
		
		return {
			saveUserLocal :saveUserLocal,
			isUserLooged : isUserLooged,
			removeUserLocal : removeUserLocal
		};
	});

}).call(this);
