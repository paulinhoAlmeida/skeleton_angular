(function() {

	var myAppModule = angular.module('NarpApp.services.modal_fullpage', ['ui.bootstrap']);
	myAppModule.service('ModalFullpageService', ['$modal', 'steam',
	function($modal, steam) {

		this.open = function(id) {
			console.log('Id for detail: ', id);

			var modalInstance = $modal.open({
				backdrop : true,
				keyboard : true,
				backdropClick : true,
				dialogFade : true,
				templateUrl : 'partials/services/modal_fullpage.html',
				dialogClass : 'modal fullPage',
			});


		};
		
	}]);

}).call(this);
