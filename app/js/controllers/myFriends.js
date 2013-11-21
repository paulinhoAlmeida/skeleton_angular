(function() {
	var app = angular.module('NarpApp.controllers.myFriends', []);
	app.controller('MyFriendsCtrl', ['$scope', '$location', '$routeParams', 'steam', 'ModalFullpageService',
	function($scope, loc, rp, steam, modalFullpageService) {



		// This sample assumes a client object has been created.
		// To learn more about creating a client, check out the starter:
		//  https://developers.google.com/+/quickstart/javascript
		var request = gapi.client.plus.people.list({
			'userId' : 'paulo.cc03@gmail.com',
			'collection' : 'visible'
		});
	
		request.execute(function(resp) {
			var numItems = resp.items.length;
			for (var i = 0; i < numItems; i++) {
				console.log(resp.items[i].displayName);
			}
		}); 


		$scope.myFriends = myFriends;


		$scope.clickToSee = function(id){
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