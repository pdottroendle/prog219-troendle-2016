/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('HomeController', function($scope, $http, settings) {
    'use strict';

    //var homeController = this;
    // homeController.homeData = 'this is home'; });

    $scope.mainData = 'HomeController MainData';
    $scope.resultFull = '';
    $scope.resultMirror = '';
    $scope.list = ['foo'];
    $scope.formData = {
        'dataType': 'Database',
        'dataSource': 'Local MongoDb',
        'comment': 'Default Comment'
    };
    $scope.text = 'hi';

    $scope.submit = function() {
        settings.setSettings($scope.formData);
        console.log('formData is -->', $scope.formData);
        $http.post('/databaseSettings/updateSettings', $scope.formData).then(function(result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.query, null, 4);
        }, function(err) {
            console.log(err);
        });
        //console.log($scope.formData);
    };

    function readSettings() {
        $http.get('/databaseSettings/getSettings').then(function(result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.settings, null, 4);
            $scope.formData = {
                'dataType': result.data.settings.dataType,
                'dataSource': result.data.settings.dataSource,
                'comment': result.data.settings.comment
            };
        }, function(err) {
            console.log(err);
        });
        console.log('readSettings  --->', $scope.formData);
    }

    readSettings();
});
