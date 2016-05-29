/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    'use strict';

    $scope.mainData = 'Renewable Data';

    $scope.userYearInput = 2017;

    $scope.yearChange = function() {
        $scope.getByYear($scope.userYearInput);
    };

    $scope.getRenewableByYear = function() {
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.getByYear($scope.userYearInput);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Error:', response.status, response.statusText);
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
