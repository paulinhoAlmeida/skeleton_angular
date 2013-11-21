/*
 #
 # 	File: <name>
 # 		Define file purpose: "What does this file do??? Why does it exist???"
 #
 # 	Class: <name>
 # 		Is this a class/object? Define its purpose: its "persona" or "role"
 # 		Define its structure: what data elements, methods, etc does it need?
 #
 # 	Function: <name>
 # 		Is this a function? Define its purpose.
 # 		Here's an example, lets say its a multiply function...
 # 		Parameters/Inputs:
 # 			x - The first integer.
 # 		 	y - The second integer.
 # 		Returns/Outputs:
 # 		 	The two integers multiplied together.
 # 		Example/Usage:
 # 			var x = <functionName>(a,b);
 # 			input.print tostring(x);
 #
 # 	See Also:
 #  		links? another file? function? webpage tutorial?
 # 		anything else that can help me understand this file overall?
 #
 */

(function() {
	var app;

	app = angular.module('NarpApp', 
		[
		'NarpApp.filters',
		'NarpApp.services',
		'NarpApp.directives',
		'NarpApp.controllers.global',
		'NarpApp.controllers.menu',
		'NarpApp.controllers.home',
		'NarpApp.controllers.about',
		'NarpApp.controllers.contact',
		'NarpApp.controllers.login',
		'NarpApp.directives.lazy-loading-img',
		'ui.bootstrap',
		'LocalStorageModule'
		]);

	app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl : 'partials/home.html',
			controller : 'HomeCtrl'
		});
		$routeProvider.when('/about', {
			templateUrl : 'partials/about.html',
			controller : 'AboutCtrl'
		});
		$routeProvider.when('/contact', {
			templateUrl : 'partials/contact.html',
			controller : 'contactCtrl'
		});

		return $routeProvider.otherwise({
			redirectTo : '/home'
		});
	}]);

}).call(this);
