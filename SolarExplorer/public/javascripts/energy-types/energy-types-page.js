/*global energyType angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http, msnTypes) {
    'use strict';

    $scope.mainData = 'EnergyTypes Data';
    $scope.index = 0;

    $scope.energyChange = function() {
        $scope.getEnergyTypes($scope.index);
        $scope.selectMsnType($scope.filteredEnergyTypes);
    };
    $scope.selectMsnType = function() {
        $scope.selectedMsnType = this.msnType.description;
        $scope.filteredEnergyTypes = $scope.energyTypes.filter(function(energy) {
            return energyType.Description === $scope.selectedMsnType;
        });
        $scope.filteredRecordCount = $scope.filteredEnergyTypes.length;
    };
    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(res) {
                // $scope=JSON.parse(res.data);
                console.log(res.data);
                console.log('xxxxxxxxxxxxxx');
                $scope.energy = res.data;
                $scope.lengths = res.data.length;
                //console.log(JSON.parse(data));
                //console.log(JSON.parse(res.data));
                //energyTypesUtils.init(res.data);
                console.log($scope.energy);
                //$scope.energyTypesUtils = energyTypesUtils;
                //$scope.simpleFormat = energyTypesUtils.getSimpleFormat();
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
