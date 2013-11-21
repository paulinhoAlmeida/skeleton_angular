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
	var directives;

	directives = angular.module('NarpApp.directives', []);

	directives.directive('appVersion', ['version',
	function(version) {
		return function(scope, elm, attrs) {
			return elm.text(version);
		};
	}]);

	directives.directive('draggable', function() {
		return {
			restrict : 'A',
			link : function(scope, elm, attrs) {
				return elm.draggable({
					revert : true
				});
			}
		};
	});

	directives.directive('droppable', function($compile) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				console.log("" + element);
				return element.droppable({
					drop : function(event, ui) {
						var dragEl, dragIndex, dropEl, reject;
						dragIndex = angular.element(ui.draggable).data('index');
						reject = angular.element(ui.draggable).data('reject');
						dragEl = angular.element(ui.draggable).parent();
						dropEl = angular.element(this);
						if (dragEl.hasClass('list1') && !dropEl.hasClass('list1') && reject === !true) {
							scope.list2.push(scope.list1[dragIndex]);
							scope.list1.splice(dragIndex, 1);
						} else if (dragEl.hasClass('list2') && !dropEl.hasClass('list2') && reject === !true) {
							scope.list1.push(scope.list2[dragIndex]);
							scope.list2.splice(dragIndex, 1);
						}
						return scope.$apply();
					}
				});
			}
		};
	});

}).call(this);
