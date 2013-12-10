(function() {
	var app = angular.module('NarpApp.controllers.upload', ['NarpApp.services.$fileUploader','NarpApp.directives.ngFileSelect','NarpApp.directives.ngFileOver','NarpApp.directives.ngFileDrop']);
	app.controller('UploadCtrl', ['$scope', '$fileUploader', 
	function($scope, $fileUploader) {

		// create a uploader with options
		var uploader = $scope.uploader = $fileUploader.create({
			scope : $scope, // to automatically update the html. Default: $rootScope
			url : '/php/upload.php',
			formData : [{
				key : 'value'
			}],
			filters : [function(item) { // first user filter
				console.info('filter1');
				return true;
			}]
		});

		// ADDING FILTERS

		uploader.filters.push(function(item) { // second user filter
			console.info('filter2');
			return true;
		});

		// REGISTER HANDLERS

		uploader.bind('afteraddingfile', function(event, item) {
			console.info('After adding a file', item);
		});

		uploader.bind('afteraddingall', function(event, items) {
			console.info('After adding all files', items);
		});

		uploader.bind('changedqueue', function(event, items) {
			console.info('Changed queue', items);
		});

		uploader.bind('beforeupload', function(event, item) {
			console.info('Before upload', item);
		});

		uploader.bind('progress', function(event, item, progress) {
			console.info('Progress: ' + progress, item);
		});

		uploader.bind('success', function(event, xhr, item, response) {
			console.info('Success', xhr, item, response);
		});

		uploader.bind('error', function(event, xhr, item, response) {
			console.info('Error', xhr, item, response);
		});

		uploader.bind('complete', function(event, xhr, item, response) {
			console.info('Complete', xhr, item, response);
		});

		uploader.bind('progressall', function(event, progress) {
			console.info('Total progress: ' + progress);
		});

		uploader.bind('completeall', function(event, items) {
			console.info('All files are transferred', items);
		});
	}]);

}).call(this);