var app = angular.module('elfApp', []);

app.controller('DatabaseController', function ($scope, $http) {
    'use strict';

    $scope.insertValidData = function () {
        $http.get('/allRenewables/insertValidCollection').then(function (data) {
            $scope.display = data;
        }, function (err) {
            console.log(err);
        });
    }; // done fail success sould be added here

    $scope.emptyCollection = function () {
        $http.get('/allRenewables/emptyCollection').then(function (data) {
            $scope.display = data;
        }, function (err) {
            console.log(err);
        });
    };

    $scope.getAll = function () {
        $http.get('/allRenewables/all-data').then(function (data) {
            $scope.allData = JSON.stringify(data, null, 4);
        }, function (err) {
            console.log(err);
        });
    };
});

elfApp.directive('elfDatabase', function () {
    'use strict';
    return {
        controller: 'DatabaseController',
        templateUrl: 'database'
    };
});
