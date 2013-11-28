(function() {
	var app = angular.module('NarpApp.controllers.guestBook', []);
	app.controller('GuestBookCtrl', ['$scope', '$location', '$routeParams', '$http', function($scope, loc, $routeParams, $http) {

		$scope.guestbookName = $routeParams['guestbookName'];
		retrieveGuestbook($routeParams['guestbookName']);

		function retrieveGuestbook(guestbookName) {
			$http.get('/rest/guestbook/' + encodeURIComponent(guestbookName)).success(function(data) {
				$scope.greetings = data.greetings;
				$scope.userServiceInfo = data.userServiceInfo;
				$scope.guestbookName = data.guestbookName;
				$scope.currentGuestbookName = data.guestbookName;
				$location.path(data.guestbookName);
			}).error(function(data, status) {
				console.log('Retrieving a guestbook failed with the status code: ' + status);
				console.log(data);
			});
		}

		$scope.submit_form = function() {
			$http.post('/rest/guestbook/' + encodeURIComponent($scope.guestbookName), {
				'content' : $scope.content
			}).success(function(data) {
				$scope.content = '';
				$scope.greetings = data.greetings;
				$scope.guestbookName = data.guestbookName;
				$scope.currentGuestbookName = data.guestbookName;
				$location.path(data.guestbookName);
			}).error(function(data, status) {
				console.log('Posting a message failed with the status code: ' + status);
				console.log(data);
			});
		};

	}]);

}).call(this);