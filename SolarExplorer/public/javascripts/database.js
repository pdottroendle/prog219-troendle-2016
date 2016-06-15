(function () {

    var app = angular.module('elfApp', []);

    app.controller('MongoController', function ($scope, $http) {

        $scope.insertValidData = function () {
            $http.get('/insertValidCollection').then(function (data) {
                $scope.display = data;
            }, function (err) {
                console.log(err);
            });
        };  // done fail success sould be added here

        $scope.emptyCollection = function () {
            $http.get('/emptyCollection').then(function (data) {
                $scope.display = data;
            }, function (err) {
                console.log(err);
            });
        };

        $scope.getAll = function () {
            $http.get('/all-data').then(function (data) {
                $scope.allData = JSON.stringify(data, null, 4);
            }, function (err) {
                console.log(err);
            });
        };
    });

})();