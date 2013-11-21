app = angular.module 'TechGrindApp'
app.config ($provide) ->
	$provide.decorator '$httpBackend', angular.mock.e2e.$httpBackendDecorator

app.run ($httpBackend) ->
	$httpBackend.whenGET('http://dev-back1.techgrind.asia/scripts/rest.pike?request=login').respond 200, 'this should contain naveen'
	$httpBackend.whenGET().passThrough()
