/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('RenewablesController', function ($scope, $http, renewableUtils) {
    'use strict';
    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.yearChange = function () {
        //$scope.getByYear($scope.userYearInput);
        $scope.getRenewable();
    };

    $scope.getRenewable = function() {
        //var dataType = settings.useDatabase ? 0 : 1;
        var dataType = 1; // check how it was
        var urls = ['/allRenewables/all-data', 'data/Renewable.json'];
        $http.get(urls[dataType])
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleStringFormat();
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
