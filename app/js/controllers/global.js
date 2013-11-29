(function() {
	var app;

	app = angular.module('NarpApp.controllers.global', []);

	app.controller('AppCtrl', ['$scope', '$location', function($scope, loc) {

		// TODO define security were

		// var for google libraries loaded
		$scope.isLibLoaded = false;

		$scope.libsloaded = function() {
			return $scope.isLibLoaded;
		}

		$scope.setLibLoaded = function() {
			$scope.isLibLoaded = true;
			$scope.$apply();
		}
	}]);

}).call(this);