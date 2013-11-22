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
			name : 'Google Friends',
			url : '#/myFriends'
		}, {
			name : 'Guess Book',
			url : '#/guessBook'
		}, {
			name : 'Something else here',
			url : '#'
		}];
	}]);
}).call(this);
