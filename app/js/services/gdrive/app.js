/*
Copyright 2012 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Author: Eric Bidelman (ericbidelman@chromium.org)
 */

function onError(e) {
	console.log(e);
}

// FILESYSTEM SUPPORT ----------------------------------------------------------
var fs = null;
var FOLDERNAME = 'test';

function writeFile(blob) {
	if (!fs) {
		return;
	}

	fs.root.getDirectory(FOLDERNAME, {
		create : true
	}, function(dirEntry) {
		dirEntry.getFile(blob.name, {
			create : true,
			exclusive : false
		}, function(fileEntry) {
			// Create a FileWriter object for our FileEntry, and write out blob.
			fileEntry.createWriter(function(fileWriter) {
				fileWriter.onerror = onError;
				fileWriter.onwriteend = function(e) {
					console.log('Write completed.');
				};
				fileWriter.write(blob);
			}, onError);
		}, onError);
	}, onError);
}
// -----------------------------------------------------------------------------

var gDriveApp = angular.module('gDriveApp', []);

gDriveApp.factory('gdocs', function() {
	var gdocs = new GDocs();

	var dnd = new DnDFileController('body', function(files) {
		var $scope = angular.element(this).scope();
		Util.toArray(files).forEach(function(file, i) {
			gdocs.upload(file, function() {
				$scope.fetchDocs(true);
			}, true);
		});
	});

	return gdocs;
});

// Init setup and attach event listeners.
document.addEventListener('DOMContentLoaded', function(e) {

	// FILESYSTEM SUPPORT --------------------------------------------------------
	window.webkitRequestFileSystem(TEMPORARY, 1024 * 1024, function(localFs) {
		fs = localFs;
	}, onError);
	// ---------------------------------------------------------------------------
});
