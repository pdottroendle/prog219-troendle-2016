/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergySelectorController', function($scope, $http, msnTypes) {
    'use strict';

    $scope.mainData = 'Renewable Data';
    $scope.index = 0;
    
/*
    $scope.energyChange = function() {
        $scope.getEnergySelector($scope.index);
        //$scope.selectMsnType();
    };
*/
    $scope.selectMsnType = function() {
        $scope.selectedMsnType = this.msnType.description;
        $scope.filteredEnergyTypes = $scope.energyTypes.filter(function(energyType) {
            return energyType.Description === $scope.selectedMsnType;
        });
        $scope.filteredRecordCount = $scope.filteredEnergyTypes.length;
    };
    


    $scope.getEnergySelector = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(response) {
                $scope.energyType = response.data; // CC correction :) msnTypes(response.data);
                console.log(response.data);
                console.log('xxxxxxxxxxxxxx');
                //$scope.energyTypes = res.data;
                $scope.recordCount = response.data.length; // CC correction :)
                $scope.msnTypes = msnTypes(response.data); // CC correction :)
            }, function errorCallback(response) {
                console.log('Error:', response.status, response.statusText);
            });
    };
        $scope.getEnergySelector();
});

elfApp.directive('elfEnergySelector', function() {
    'use strict';
    return {
        controller: 'EnergySelectorController',
        templateUrl: 'energy-types/energy-selector'
    };
});
