/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('EnergyTypesController', function($scope, $http) {
    'use strict';

    $scope.mainData = 'Energy Types Data';
    $scope.index = 0;
getMsnTypes
$scope.getEnergyTypes = function () {
        $http.get('data/EnergyTypes.json')
            .then(function (response) {                
                $scope.msnTypes = msnTypes(response.data);
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
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
