(function() {
	var app = angular.module('NarpApp.controllers.myFriends', []);
	app.controller('MyFriendsCtrl', ['$scope', '$location', '$routeParams', 'steam', 'ModalFullpageService',
	function($scope, loc, rp, steam, modalFullpageService) {

		$scope.getAllMyFriendsFromGoogle = function(){
			 var apiKey = 'AI39si7PakgVqFaZhz6ZFCOQYbE206epm1BwaKPO6Vzz7K3pGnaIj18xFf7v1YJ8wn4fDPbnoaq5n5DKa3YoAkL6gdp8a2rKxQ';

			// gapi.client.setApiKey(apiKey);
			// gapi.client.load('urlshortener', 'v1', makeRequest);
			// function makeRequest() {
				// function writeResponse(resp) {
					// var responseText;
					// if (resp.code && resp.data[0].debugInfo == 'QuotaState: BLOCKED') {
						// responseText = 'Invalid API key provided. Please replace the "apiKey" value with your own.';
					// } else {
						// responseText = 'Short URL ' + shortUrl + ' expands to ' + resp.longUrl;
					// }
// 					
					// console.log('Data from Google: ',responseText);
				// }
// 			
				// var shortUrl = 'https://www.googleapis.com/plus/v1/people/paulo.cc03@gmail.com';
				// var request = gapi.client.urlshortener.url.get({
					// 'shortUrl' : shortUrl
				// });
				// request.execute(writeResponse);
			// }
// 
// 			

			// $.get('https://www.googleapis.com/plus/v1/people/paulo.cc03@gmail.com',
			// function(data){
				// console.log('Data from Google: ',data);
			// });

			var xhReq = new XMLHttpRequest();
			xhReq.open("GET", "https://www.googleapis.com/plus/v1/activities/z12gtjhq3qn2xxl2o224exwiqruvtda0i?key="+apiKey, false);
			xhReq.send(null);
			var serverResponse = xhReq.responseText;
			console.log('Data from Google: ',serverResponse);

		}

		$scope.myFriends = myFriends;

		$scope.clickToSee = function(id) {
			return modalFullpageService.open(id);
		};

	}]);

	var myFriends = [{
		id : 0,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 1,
		name : 'Bart',
		img : 'img/silhouette_bart.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 2,
		name : 'Lisa',
		img : 'img/silhouette_lisa.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 3,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 4,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 0,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 0,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 0,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}, {
		id : 0,
		name : 'Homer',
		img : 'img/silhouette_homer.png',
		desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}];

}).call(this); 