(function() {

    var app = angular.module('elfApp');//, []);

    app.controller('DatabaseController', function($scope, $http) {


        $scope.insertValidData = function() {
            $http.get('/allRenewables/insertValidCollection').then(function(data) {
                $scope.display = data;
            }, function(err) {
                console.log(err);
            });
        };

        $scope.emptyCollection = function() {
            $http.get('/allRenewables/emptyCollection', {name: 'lincoln'}).then(function(data) {
                $scope.display = data;
            }, function(err) {
                console.log(err);
            });
        };

        $scope.getAll = function() {
            $http.get('/allRenewables/all-data').then(function(data) {
                $scope.allData = JSON.stringify(data, null, 4);
            }, function(err) {
                console.log(err);
            });
        };
    });

})();