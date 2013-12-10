(function() {
	var app = angular.module('NarpApp.services.login', ['ui.bootstrap']);
	app.service('LoginService', ['$modal', 'steam', function($modal, steam) {

		this.open = function(id) {
			console.log('Id for detail: ', id);

			var modalInstance = $modal.open({
				backdrop : true,
				keyboard : true,
				backdropClick : true,
				dialogFade : true,
				templateUrl : 'partials/services/login.html',
				dialogClass : 'modal fullPage',
				controller : ModalInstanceCtrl

			});
		};
		var ModalInstanceCtrl = function($scope, $modalInstance) {
			
			$scope.loginScreenOn = true;
			//var to show the login screen or register
			$scope.loginScreen = function() {
				return $scope.loginScreenOn;
			};
			//Login buttons
			$scope.ok = function() {
				var passToUse = this.password;
				gapi.client.userendpoint.getUser({'id':this.user}).execute(function(data){
					console.log('data from get User: ',data);
					if(data.password == passToUse){
						steam.saveUserLocal(data);
						$scope.$apply();
						$modalInstance.dismiss('cancel');
					}else{
						
					}
					
				});
				//$modalInstance.close();
			};
			$scope.close = function() {
				$modalInstance.dismiss('cancel');
			};
			$scope.register = function() {
				console.log('Goign to register user');
				$scope.loginScreenOn = false;
			};

			
//			$scope.userReg = '';
//			$scope.passwordReg = '';
			//Register buttons
			$scope.registerOk = function() {
				console.log('Ok to the register process');
				$scope.loginScreenOn = true;
				gapi.client.userendpoint.insertUser({
													"password" : this.passwordReg,
													"user" : this.userReg
													}).execute(function(data){
														console.log('User well inserted');
														console.log('register user: ', data);
													});
			};
			$scope.closeRegister = function() {
				console.log('Canceling the register process');
				$scope.loginScreenOn = true;
				gapi.client.userendpoint.listUser().execute(function(data){
					console.log('List Response: ', data);
				});
				
			};
			
		};

		
	}]);


}).call(this);
