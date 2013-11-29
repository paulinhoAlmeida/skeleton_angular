(function() {
	var app = angular.module('NarpApp.controllers.menu', []);
	app.controller('MenuCtrl', [ '$scope', '$http', '$location', 'steam', 'LoginService','$rootScope',
	function($scope, http, $location, steam, loginService, $rootScope) {

		$scope.getClass = function(path) {
			if ($location.path() == path) {
				return "active"
			} else {
				return ""
			}
		};

		$scope.actions = [ {
			name : 'Google Friends',
			url : '#/myFriends'
		}, {
			name : 'Guess Book',
			url : '#/guestBook'
		}, {
			name : 'GDrive Files',
			url : '#/gdrive'
		} ];

		$scope.signinCallback = function(authResult) {
			console.log('Sign-in state: ', authResult);
			if (authResult['access_token']) {
				// Update the app to reflect a signed in user
				// Hide the sign-in button now that the user is
				// authorized, for example:
				steam.saveUserLocal(authResult);
				$scope.$apply();

			} else if (authResult['error']) {
				console.log('Sign-in state for error field: ' + authResult['error']);
				// Update the app to reflect a signed out user
				// Possible error values:
				// "user_signed_out" - User is signed-out
				// "access_denied" - User denied access to your app
				// "immediate_failed" - Could not automatically log in
				// the user
				//steam.removeUserLocal();
				//$scope.$apply();

			}
		};

		$scope.isLogged = function(){
			var user = steam.isUserLooged();
			//console.log('User on local storage: ',user);
			return user;
		}

		$scope.login = function(){
			loginService.open();
			//steam.saveUserLocal('We need to fill this is a similar information has it would be from google');
			//$scope.$apply();
		}

		$scope.logout = function(){
			console.log('lets logout the user.');
			gapi.auth.signOut();
			steam.removeUserLocal();
			//$scope.$apply();
		}

	} ]);
}).call(this);