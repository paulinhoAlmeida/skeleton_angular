(function() {
	var app = angular.module('NarpApp.controllers.home', []);
	app.controller('HomeCtrl', ['$scope', '$location', '$routeParams', 'steam','ModalFullpageService',
	function($scope, loc, rp, steam, modalFullpageService) {
		
		$scope.clickToSee = function(id){
			return modalFullpageService.open(id);
		};
		
	}]);
}).call(this);
