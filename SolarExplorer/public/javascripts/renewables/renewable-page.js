/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('RenewablesController', function($scope, $http, renewableUtils, settings) {
    'use strict';
    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.yearChange = function() {
        //$scope.getByYear($scope.userYearInput);
        $scope.getRenewable();
    };

    $scope.getRenewable = function() {
        var dataType = settings.useDatabase ? 0 : 1;
        console.log('factory ----> value of DB', settings.useDatabase);
        //var dataType = 1; // check how it was
        var urls = ['data/Renewable.json', '/allRenewables/all-data']; //data/Renewable.json'];
        console.log('factory ----> urls', urls[dataType]);
        $http.get(urls[dataType])
            .then(function(res) {
                renewableUtils.init(res.data);

                if (settings.useDatabase) {
                    $scope.simpleFormat = renewableUtils.getSimpleStringFormat();
                    //$scope.renewable = renewableUtils.getComplexFormat(res.data.renewables);
                } else {
                    $scope.renewable = res.data;
                }

                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                //$scope.simpleFormat = renewableUtils.getSimpleStringFormat();
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
