(function() {

	var myAppModule = angular.module('NarpApp.services.modal_fullpage', ['ui.bootstrap']);
	myAppModule.service('ModalFullpageService', ['$dialog', 'steam', '$rootScope',
	function($dialog, steam, $rootScope) {

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
				templateUrl : 'partials/services/modal_fullpage.html',
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
