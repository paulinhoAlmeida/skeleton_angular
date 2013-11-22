(function() {
	var app = angular.module('NarpApp.controllers.menu', []);
	app.controller('MenuCtrl', [
			'$scope',
			'$http',
			'$location',
			'steam',
			'LoginService',
			function($scope, http, $location, steam, loginService) {

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
					name : 'Something else here',
					url : '#'
				} ];
				
				$scope.signinCallback = function(authResult) {
					console.log('Sign-in state: ', authResult);
					if (authResult['access_token']) {
						// Update the app to reflect a signed in user
						// Hide the sign-in button now that the user is
						// authorized, for example:
						$('#signinButton').hide();
						steam.saveUserLocal(authResult);
					} else if (authResult['error']) {
						// Update the app to reflect a signed out user
						// Possible error values:
						// "user_signed_out" - User is signed-out
						// "access_denied" - User denied access to your app
						// "immediate_failed" - Could not automatically log in
						// the user
						$('#signinButton').show();
						steam.removeUserLocal();
						console.log('Sign-in state: ' + authResult['error']);
					}
				};
				
				$scope.isLogged = function(){
					return steam.isUserLooged();
				}

				$scope.login = function(){
					loginService.open();
				}

				$scope.logout = function(){
					console.log('lets logout the user.');
					gapi.auth.signOut();
					steam.removeUserLocal();
				}
				
			} ]);
}).call(this);
