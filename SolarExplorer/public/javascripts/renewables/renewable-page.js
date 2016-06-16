/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('RenewablesController', function ($scope, $http, renewableUtils, settings) {
    'use strict';
    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.yearChange = function () {
        //$scope.getByYear($scope.userYearInput);
        $scope.getRenewable();
    };
/*
    $scope.getRenewable = function () {
        $http.get('data/Renewable.json')
            .then(function (res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
            });
    };
*/

    $scope.getRenewable = function () {
        var dataType = settings.useDatabase ? 0 : 1;
        dataType = 1;
        var urls = ['/allRenewables/all-data', 'data/Renewable.json'];
        $http.get(urls[dataType])
            .then(function (res) {
                if (dataType) {
                    $scope.renewable = renewableUtils.getComplexFormat(res.data.renewables);
                } else {
                    $scope.renewable = res.data;
                }
                renewableUtils.init($scope.renewable);
                //renewableUtils.init($scope.renewable);
                $scope.renewableUtils = renewableUtils;
            });
    };
});

elfApp.directive('elfRenewable', function () {
    'use strict';
    return {
        controller: 'RenewablesController',
        templateUrl: 'renewables/renewable'
    };
});
