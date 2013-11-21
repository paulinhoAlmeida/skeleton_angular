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
	var filters;

	filters = angular.module('NarpApp.filters.interpolate', []);

	filters.filter('interpolate', ['version',
	function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}]);

}).call(this);
