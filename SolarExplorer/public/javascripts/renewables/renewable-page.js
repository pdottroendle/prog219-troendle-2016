/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('RenewablesController', function($scope, $http, msnType) {
    'use strict';

    $scope.mainData = 'Renewable Data';
    $scope.index = 0;

    $scope.getRenewable = function() {
        $http.get('data/Renewable.json') //$http.get('data/EnergyTypes.json')
            .then(function(res) {
                msnType.init(res.data);
                $scope.renewable = res.data;
                $scope.msnType = msnType;
               // $scope.simpleFormat = msnType.getSimpleFormat();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('Error:', response.status, response.statusText);
            });
    };
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'RenewablesController',
        templateUrl: 'renewables/renewable'
    };
});
