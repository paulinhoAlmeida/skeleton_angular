(function() {
	var app = angular.module('NarpApp.services.login', []);
	app.service('LoginService', ['$dialog', 'steam',
 	function($dialog, steam) {
		
		this.open = function(id) {

			console.log('Id for detail: ',id);
			dialogOptions = {
				title : 'my test title....'
			}

			var dialogDefaults = {
				backdrop : true,
				keyboard : true,
				backdropClick : true,
				dialogFade : true,
				templateUrl : 'partials/services/login.html',
				dialogClass : 'modal fullPage'
			};

			dialogDefaults.controller = function($scope, dialog) {
				$scope.dialogOptions = dialogOptions;
				$scope.dialogOptions.close = function(result) {
					dialog.close(result);
				};
			}
			var d = $dialog.dialog(dialogDefaults);
			d.open();

		};

	}]);
}).call(this);
