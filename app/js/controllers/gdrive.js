(function() {
	var app = angular.module('NarpApp.controllers.gdrive', []);
	app.controller('GdriveCtrl', ['$scope', '$http', '$location', 'steam', 'LoginService', '$rootScope', 'gdocs', function($scope, $http, $location, steam, loginService, $rootScope, gdocs) {

		$scope.docs = [];
		// Response handler that caches file icons in the filesystem API.
		function successCallbackWithFsCaching(resp, status, headers, config) {
			var docs = [];

			var totalEntries = resp.items.length;

			resp.items.forEach(function(entry, i) {
				var doc = {
					title : entry.title,
					updatedDate : Util.formatDate(entry.modifiedDate),
					updatedDateFull : entry.modifiedDate,
					icon : entry.iconLink,
					alternateLink : entry.alternateLink,
					size : entry.fileSize ? '( ' + entry.fileSize + ' bytes)' : null
				};

				// 'http://gstatic.google.com/doc_icon_128.png' -> 'doc_icon_128.png'
				doc.iconFilename = doc.icon.substring(doc.icon.lastIndexOf('/') + 1);

				// If file exists, it we'll get back a FileEntry for the filesystem URL.
				// Otherwise, the error callback will fire and we need to XHR it in and write it to the FS.
				var fsURL = fs.root.toURL() + FOLDERNAME + '/' + doc.iconFilename;
				window.webkitResolveLocalFileSystemURL(fsURL, function(entry) {
					console.log('Fetched icon from the FS cache');

					doc.icon = entry.toURL(); // should
					// be === to fsURL, but whatevs.

					$scope.docs.push(doc);

					// Only want to sort and call $apply() when we have all entries.
					if (totalEntries - 1 == i) {
						$scope.docs.sort(Util.sortByDate);
						$scope.$apply(function($scope) {
						}); // Inform angular we made changes.
					}
				}, function(e) {
					$http.get(doc.icon, {
						responseType : 'blob'
					}).success(function(blob) {
						console.log('Fetched icon via XHR');
						blob.name = doc.iconFilename; // Add icon filename to blob.
						writeFile(blob); // Write is async, but that's ok.
						doc.icon = window.URL.createObjectURL(blob);
						$scope.docs.push(doc);
						if (totalEntries - 1 == i) {
							$scope.docs.sort(Util.sortByDate);
						}
					});

				});
			});
		}
		$scope.clearDocs = function() {
			$scope.docs = []; // Clear out old
			// results.
		};

		$scope.fetchDocs = function(retry) {
			this.clearDocs();

			if (gdocs.accessToken) {
				var config = {
					params : {
						'alt' : 'json'
					},
					headers : {
						'Authorization' : 'Bearer ' + gdocs.accessToken
					}
				};

				$http.get(gdocs.DOCLIST_FEED, config).success(successCallbackWithFsCaching).error(function(data, status, headers, config) {
					if (status == 401 && retry) {
						gdocs.removeCachedAuthToken(gdocs.auth.bind(gdocs, true, $scope.fetchDocs.bind($scope, false)));
					}
				});
			}
		};
		
//		gdocs.auth(true, function() {
//			$scope.fetchDocs(false);
//		});

		// Toggles the authorization state.
		$scope.toggleAuth = function(interactive) {
			if (!gdocs.accessToken) {
				gdocs.auth(interactive, function() {
					$scope.fetchDocs(false);
				});
			} else {
				gdocs.revokeAuthToken(function() {
				});
				this.clearDocs();
			}
		}

		// Controls the label of the
		// authorize/deauthorize button.
		$scope.authButtonLabel = function() {
			if (gdocs.accessToken)
				return 'Deauthorize';
			else
				return 'Authorize';
		};

		

//		//fetching json throw Yahoo service not really sure if is the best option since is just html wrappper.
//		var urlToFetchMainFolder = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fgoogledrive.com%2Fhost%2F0B2YSgad5pD5QUkJoUkFWSWRnU0k%2F%22%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22folder-cell%22%5D%2Fa'&format=json&diagnostics=true&callback=";
//		$http.get(urlToFetchMainFolder, function(data){
//			console.log('DATA: ',data.query.results.a);
//		}, 'json');

	}]);

}).call(this);