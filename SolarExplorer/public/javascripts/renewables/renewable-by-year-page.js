/*global angular*/
var elfApp = angular.module("elfApp");

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {

    $scope.mainData = "Renewable Data";

    $scope.userYearInput = 2006; //"Simple Format Data";
    //$scope.index = 0;
    
    $scope.getRenewableByYear = function() { 
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.getByYear($scope.userYearInput);
            });
    };
    
    $scope.getByYear = function(year) {
        var renewableData = $scope.renewableUtils.getByYear(year);
        $scope.index = renewableData.index;
        $scope.renewableByYear = renewableData.renewable;
        return $scope.renewableByYear;
        };
        
});

elfApp.directive('elfRenewableByYear', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewables/renewable-by-year'
        };
});