(function() {
	var app = angular.module('NarpApp.services.login', ['ui.bootstrap']);
	app.service('LoginService', [ '$modal', 'steam', function($modal, steam) {

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

			var ModalInstanceCtrl = function($scope, $modalInstance, items) {
				$scope.ok = function() {
					$modalInstance.close($scope.selected.item);
				};

				$scope.close = function() {
					$modalInstance.dismiss('cancel');
				};
			};

		};
	} ]);

}).call(this);
