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
                    $scope.msnTypesmsn1 = $scope.msnTypes[1]['msn'];
                    $scope.msnTypesdescription1 =$scope.msnTypes[1]['description'];
                    $scope.msnTypesmsn2 = $scope.msnTypes[2]['msn'];
                    $scope.msnTypesdescription2 =$scope.msnTypes[2]['description'];
                    $scope.msnTypesmsn3 = $scope.msnTypes[3]['msn'];
                    $scope.msnTypesdescription3 =$scope.msnTypes[3]['description'];
                    $scope.msnTypesmsn4 = $scope.msnTypes[4]['msn'];
                    $scope.msnTypesdescription4 =$scope.msnTypes[4]['description'];
 
                    $scope.msnTypesmsn5 = $scope.msnTypes[5]['msn'];
                    $scope.msnTypesdescription5 =$scope.msnTypes[5]['description'];
                    $scope.msnTypesmsn6 = $scope.msnTypes[6]['msn'];
                    $scope.msnTypesdescription6 =$scope.msnTypes[6]['description'];
                    $scope.msnTypesmsn7 = $scope.msnTypes[7]['msn'];
                    $scope.msnTypesdescription7 =$scope.msnTypes[7]['description'];
                    $scope.msnTypesmsn8 = $scope.msnTypes[8]['msn'];                    
                    $scope.msnTypesdescription8 =$scope.msnTypes[8]['description'];
                    $scope.msnTypesmsn9 = $scope.msnTypes[9]['msn'];
                    $scope.msnTypesdescription9 =$scope.msnTypes[9]['description'];
                    $scope.msnTypesmsn10 = $scope.msnTypes[10]['msn'];
                    $scope.msnTypesdescription10 =$scope.msnTypes[10]['description'];
                    $scope.msnTypesmsn11 = $scope.msnTypes[11]['msn'];
                    $scope.msnTypesdescription11 =$scope.msnTypes[11]['description'];
  
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
