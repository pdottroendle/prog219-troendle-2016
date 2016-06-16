/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('RenewablesController', function($scope, $http, renewableUtils) {
    'use strict';
    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.yearChange = function() {
        //$scope.getByYear($scope.userYearInput);
        $scope.getRenewable();
    };

    $scope.getRenewable = function() {
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
            });
    };
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'RenewablesController',
        templateUrl: 'renewables/renewable'
    };
});
