/*global angular*/
var elfApp = angular.module('elfApp');

elfApp.controller('HomeController', function () {
    'use strict';

    var homeController = this;
    homeController.homeData = 'this is home';

});

*/
elfApp = angular.module('elfApp');

elfApp.controller('HomeController', function ($scope, $http, settings) {
    'use strict';

    $scope.mainData = 'HomeController MainData';
    $scope.resultFull = '/databaseSettings/saveSettings';
    $scope.resultMirror = '/databaseSettings/saveSettings';
    $scope.list = ['foo'];
    $scope.formData = {
        'dataType': 'a',
        'dataSource': 'b',
        'comment': 'c'
    };
    $scope.text = 'hello';

    $scope.submit = function () {
        settings.getSettings($scope.formdata);
        $http.post('/databaseSettings/updateSettings', $scope.formData).then(function (result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.query, null, 4);
        }, function (err) {
            console.log(err);
        });
        console.log($scope.formData);
    };

    function readSettings() {
        $http.get('/databaseSettings/getSettings').then(function (result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.settings, null, 4);
            $scope.formData = {
                'dataType': result.data.settings.dataType,
                'dataSource': result.data.settings.dataSource,
                'comment': result.data.settings.comment
            };
        }, function (err) {
            console.log(err);
        });
        console.log($scope.formData);
    }

    readSettings();
});

elfApp.directive('elfHome', function () {
    'use strict';
    return {
        controller: 'HomeController',
        templateUrl: 'home'
    };
});
*/