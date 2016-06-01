/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergySelectorController', function($scope, $http, msnTypes) {
    'use strict';

    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.energyChange = function() {
        $scope.getEnergySelector($scope.index);
        //$scope.selectMsnType();
    };

    $scope.selectMsnType = function() {
        $scope.selectedMsnType = this.msnType.description;
        $scope.filteredEnergyTypes = $scope.energyTypes.filter(function(energyType) {
            return energyType.Description === $scope.selectedMsnType;
        });
        $scope.filteredRecordCount = $scope.filteredEnergyTypes.length;
    };

    /*
    $scope.getByYear = function(year) {
    var renewableData = $scope.renewableUtils.getByYear(year);
    $scope.index = renewableData.index;
    $scope.renewableByYear = renewableData.renewable;
    return $scope.renewableByYear;
        };  */

    $scope.getEnergySelector = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(response) {
                $scope.energyType = msnTypes(response.data);
                console.log(response.data);
                console.log('xxxxxxxxxxxxxx');
                //$scope.energyTypes = res.data;
            }, function errorCallback(response) {
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
