/*global angular*/
var myModule = angular.module("elfApp", ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
     'use strict';
     
    $routeProvider.when("/", {
        templateUrl: "main",
        controller: "MainController"
    })
    .when('/simple-format', {
    templateUrl: 'simple-format-page',
    controller: 'SimpleFormatController'  
    })
    
    .when('/renewable-by-year', {
     templateUrl: 'renewable-by-year',
     controller: 'RenewableByYear'
    })
    
    .when('/about', {
        templateUrl: "about",
        controller: "AboutController"
    })
    
    .otherwise({
        redirectTo: '/'
    });
});