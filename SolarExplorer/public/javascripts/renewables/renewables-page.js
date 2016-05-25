/*global angular*/
var elfApp = angular.module("elfApp");

elfApp.controller('MainController', function($scope, $http, renewableUtils) {

$scope.mainData = "Main Data";
$scope.index = 0;

$scope.getRenewable = function() {        
    $http.get('data/Renewable.json')
        .then(function(res) {
            renewableUtils.init(res.data);
            $scope.renewable = res.data;
            $scope.renewableUtils = renewableUtils;
            $scope.simpleFormat = renewableUtils.getSimpleFormat();
        });
};

//incomplete xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
$scope.getByYear= function(year)
     var renewableData = $scope.renewableUtils.getByYear(year);
       $scope.index = renewableData
       $scope.renewable = renewableData.renewable; 
return $scope.renewable;
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'renewables/renewable'
    };
});

