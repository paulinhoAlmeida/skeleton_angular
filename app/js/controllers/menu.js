(function() {
	var app = angular.module('NarpApp.controllers.menu', []);
	app.controller('MenuCtrl', ['$scope', '$http','$location',
	function($scope, http, $location) {

		$scope.getClass = function(path) {
			if ($location.path() == path) {
				return "active"
			} else {
				return ""
			}
		}

		return $scope.actions = [{
			name : 'Action',
			url : '#'
		}, {
			name : 'Another action',
			url : '#'
		}, {
			name : 'Something else here',
			url : '#'
		}];
	}]);
}).call(this);
