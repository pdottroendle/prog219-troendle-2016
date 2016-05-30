/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http) { // , energyTypesUtils) {
    'use strict';

    $scope.mainData = 'EnergyTypes Data';
    $scope.index = 0;

    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(res) {
               // $scope=JSON.parse(res.data);
               console.log(res.data);    
               console.log("xxxxxxxxxxxxxx");
                $scope.energy = res.data;
               //console.log(JSON.parse(data));
               //console.log(JSON.parse(res.data));
                //energyTypesUtils.init(res.data);
                console.log($scope.energy)
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
