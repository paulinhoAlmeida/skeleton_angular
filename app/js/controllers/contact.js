(function() {
	var app = angular.module('NarpApp.controllers.contact', []);
	app.controller('contactCtrl', ['$scope', '$location', '$routeParams', 'steam',
	function($scope, loc, rp, steam) {

		$scope.myFriends = myFriends;
		
		return $scope.myGroups = myGroups;
	}]);

	var myGroups = [
	{
		name: 'My Groups',
		img : 'img/the-simpsons.png',
		avatar : 'img/avatar_homer.png',
		desc : [
			{
				desc : 'Lorem ipsum'
			},
			{
				desc : 'Lorem ipsum'
			},
			{
				desc : 'Lorem ipsum'
			},
		] 
	}
	];


	var myFriends = [{
	id : 0,
	name : 'Homer',
	img : 'img/silhouette_homer.png',
	desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
	id : 0,
	name : 'Bart',
	img : 'img/silhouette_bart.png',
	desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
	id : 0,
	name : 'Lisa',
	img : 'img/silhouette_lisa.png',
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