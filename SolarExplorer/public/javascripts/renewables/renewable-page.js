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
        var urls = ['/allRenewables/all-data','data/Renewable.json'];
        console.log('factory ----> urls', urls[dataType]);
        $http.get(urls[dataType])
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                console.log('debug from server res.renewables', res.data);
                console.log('debug from client  res.renewables processed', renewableUtils);
                //if (settings.useDatabase) {

              /// } else {
                $scope.simpleFormat = renewableUtils.getSimpleStringFormat();
                    //$scope.renewable = renewableUtils.getComplexFormat(res.data.renewables);
              // }
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
