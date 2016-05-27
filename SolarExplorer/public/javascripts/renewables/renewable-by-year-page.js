/*global angular*/
var elfApp = angular.module("elfApp");

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {

    $scope.mainData = "Simple Format Data";

    $scope.userYearInput = 2017; //"Simple Format Data";
    //$scope.index = 0;
    
    $scope.getRenewableByYear = function() { 
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.getByYear($scope.userYearInput);
            });
    };
    
    $scope.getByYear = function(year) {
        var renewableData = $scope.renewableUtils.getByYear(year);
        $scope.index = renewableData.index;
        $scope.renewableByYear = renewableData.renewable;
        return $scope.renewableByYear;
    };
});

elfApp.directive('elfRenewableByYear', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewables/renewable-by-year'
        };
});

/*
$( "#renewableByYear" ).change(function() {
    getRenewableByYear();
});

//input#inputByYear(type="number", value='2017') data-ng-model="userYearInput" min='2007')
//button#getByYear.btn.btn-primary(ng-click="renewableByYear()") Get Renewable by Year


    $('#getByYear').click(getRenewableByYear);
    
     function getRenewableByYear() {
        var yearInput = $('#inputByYear').val();
        console.log('getRenewableByYear called');

        $.getJSON('/renewablesByYear/' + yearInput, function (response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function () {
                console.log('second success');
            })
            .fail(function (a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function () {
                console.log('complete');
            });
    }
    
    */