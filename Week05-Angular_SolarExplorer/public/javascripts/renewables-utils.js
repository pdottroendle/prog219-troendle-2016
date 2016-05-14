var elfApp = angular.module('elfApp');

function RenewableUtils() {
    'use strict';

    var renewables;

    this.name = 'renewableUtils';

    this.init = function(initRenewables) {
        renewables = initRenewables;
    };

    this.getItemCount = function() {
        // YOUR CODE HERE
    };

    this.getByIndex = function(index) {
        // YOUR CODE HERE
    };

    this.getYears = function() {
        return renewables.map(function(renewable) {
            return renewable.Year;
        });
    };

    // YOU WRITE THE LASt TWO METHODS
}

elfApp.service('renewableUtils', RenewableUtils);