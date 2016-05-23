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

})

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl: 'renewable'
    };
});

