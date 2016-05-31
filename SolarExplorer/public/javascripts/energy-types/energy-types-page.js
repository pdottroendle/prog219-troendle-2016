/*global energyType angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http, msnTypes) {
    'use strict';

    $scope.mainData = 'EnergyTypes Data';
    $scope.index = 0;

    $scope.energyChange = function() {
        $scope.getEnergyTypes($scope.index);
    };
    
    $scope.selectMsnType = function() {
        $scope.selectedMsnType = this.msnType.description;
        console.log(selectedMsnType);
        $scope.filteredEnergyTypes = $scope.energyTypes.filter(function(energyType) {
            return energyType.Description === $scope.selectedMsnType;
        });
        $scope.filteredRecordCount = $scope.filteredEnergyTypes.length;
    };

    $scope.getEnergyTypes = function () {
            $http.get('data/EnergyTypes.json') 
                .then(function (response) {                
                    $scope.msnTypes = msnTypes(response.data);
                    var msn = [];
                    for (var i = 0; i < $scope.msnTypes.length ; i++) {
                    msn.push($scope.msnTypes[i]['msn'] + ':    ' + $scope.msnTypes[i]['description'] ); 
                    }; 
                    $scope.x = msn; 
  
                    $scope.energyTypes = response.data;
                  }, function errorCallback(response) {
                    console.log('Error:', response.status, response.statusText);
                  }
                );
    };
});

elfApp.directive('elfEnergyTypes', function() {
    'use strict';
    return {
        controller: 'EnergyTypesController',
        templateUrl: 'energy-types/energy-types'
    };
});
