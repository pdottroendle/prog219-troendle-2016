/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergySelectorController', function($scope, $http, msnTypes) {
    'use strict';

    $scope.mainData = 'Renewable Data';
    $scope.index = 0;
    
    $scope.selectMsnType = function() {
        $scope.selectedMsnType = this.msnType.description;
        $scope.filteredEnergyTypes = $scope.energyTypes.filter(function(energyType) {
            return energyType.Description === $scope.selectedMsnType;
        });
        $scope.filteredRecordCount = $scope.filteredEnergyTypes.length;
    };
    
    $scope.getEnergySelector = function() {
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

elfApp.directive('elfEnergySelector', function() {
    'use strict';
    return {
        controller: 'EnergySelectorController',
        templateUrl: 'energy-types/energy-selector'
    };
});
