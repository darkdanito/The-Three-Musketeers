// Code goes here

var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) 
{
    $routeProvider
        .when('/home', 
		{
            templateUrl: 'home.html',
            controller: 'StudentController'
        })
        .when('/view1', 
		{
            templateUrl: 'view1.html',
            controller: 'StudentController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});