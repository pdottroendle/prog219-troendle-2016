/*global angular*/
var myModule = angular.module('elfApp', ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
            templateUrl: 'home',
            controller: 'HomeController'
        })
        .when('/renewable-by-year', {
            templateUrl: 'renewables/renewable-by-year-page',
            controller: 'RenewableByYearController'
        })
        .when('/renewables', {
            templateUrl: 'renewables/renewable-page',
            controller: 'RenewablesController'
        })
        .when('/simple-format', {
            templateUrl: 'renewables/simple-format-page',
            controller: 'SimpleFormatController'
        })
        .when('/about', {
            templateUrl: 'about',
            controller: 'AboutController'
        }).otherwise({
            redirectTo: '/'
        });
});
