/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergySelectorController', function($scope, $http, msnTypes) {
    'use strict';

    $scope.mainData = 'Renewable Data';
    $scope.index = 0;
    
    $scope.selectMsnType = function() {
        $scope.selectedMsnType = this.msnType.description;
        $scope.filteredEnergyTypes = $scope.energyTypes.filter(function(energy) {
            return energyType.Description === $scope.selectedMsnType;
        });
        $scope.filteredRecordCount = $scope.filteredEnergyTypes.length;
    };
    
    $scope.getEnergySelector = function() {
        $http.get('data/EnergyTypes.json')
                .then(function (response) {                
                    $scope.msnTypes = msnTypes(response.data);
                    console.log(response.data);
                    console.log('xxxxxxxxxxxxxx');
                    //$scope.energyTypes = res.data;
                  }, function errorCallback(response) {
                    console.log('Error:', response.status, response.statusText);
                  }
                );
        };
    });

elfApp.directive('elfEnergySelector', function() {
    'use strict';
    return {
        controller: 'EnergySelectorController',
        templateUrl: 'energy-types/energy-selector'
    };
});
