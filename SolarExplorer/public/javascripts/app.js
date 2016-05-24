/*global angular*/
var myModule = angular.module("elfApp", ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
     'use strict';
     
    $routeProvider.when("/", {
        templateUrl: "renewables/renewables-page",
        controller: "MainController"
    })
    .when('/simple-format', {
    templateUrl: 'renewables/simple-format-page',
    controller: 'SimpleFormatController'
    })
    .when('/about', {
        templateUrl: "about",
        controller: "AboutController"
    }).otherwise({
        redirectTo: '/'
    });
});