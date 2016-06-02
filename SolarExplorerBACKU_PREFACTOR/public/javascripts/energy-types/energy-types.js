/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http, energyTypes) {
    'use strict';

    $scope.mainData = 'Energy Data';
    $scope.index = 0;

    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(res) {
                energyTypes.init(res.data);
                $scope.energy = res.data;
                $scope.energyTypes = energyTypes;
                console.log(res.data);
                console.log(energyTypes.init(res.data));
                console.log('energyTypes ------------> ');
                console.log(energyTypes);
                //$scope.simpleFormat = energyTypes.getSimpleFormat();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Error:', response.status, response.statusText);
            });
    };
});


elfApp.directive('elfEnergysTypes', function() {
    'use strict';
    return {
        controller: 'EnergyTypesController',
        templateUrl: 'energy-types/energy-types'
    };
});
