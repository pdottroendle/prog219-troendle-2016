/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http, energyTypesUtils) {
    'use strict';

    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(res) {
                energyTypesUtils.init(res.data);
                $scope.energy = res.data;
                $scope.energyTypesUtils = energyTypesUtils;
                $scope.simpleFormat = energyTypesUtils.getSimpleFormat();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Error:', response.status, response.statusText);
            });
    };
});

elfApp.directive('elfEnergyTypes', function() {
    'use strict';
    return {
        controller: 'EnergyTypesController',
        templateUrl: 'energy-types/energy-types'
    };
});
