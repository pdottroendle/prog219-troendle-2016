var elfApp = angular.module('elfApp');

function RenewableUtils() {
    'use strict';

    var renewables;

    this.name = 'renewableUtils';

    this.init = function(initRenewables) {
        renewables = initRenewables;
    };

    this.getItemCount = function() {
          return renewables.length;
    };

    this.getByIndex = function(index) {
        return renewables[index];
    };

    this.getYears = function() {
        return renewables.map(function(renewable) {
            return renewable.Year ;
        });
    };
    
    this.getByYears = function(year) {
        return renewables.map(function(renewable) {
//            it should return an object with
// An index property set to the index of the object with that year
// The object at that index

            return renewable.Year ;
        });
    };
    
    this.getSimpleFormat = function() {
        return renewables.map(function(renewable) {
        return  { geo : Number(renewable['Geothermal (quadrillion Btu)']) , 
                  wind : Number(renewable['Wind power (quadrillion Btu)']) ,
                  solar : Number(renewable['Solar (quadrillion Btu)']) } ;
        });
    };
    
    this.getSimpleStringFormat = function() {
        return renewables.map(function(renewable) {
        return  { geo : String(renewable['Geothermal (quadrillion Btu)']) , 
                  wind : String(renewable['Wind power (quadrillion Btu)']) ,
                  solar : String(renewable['Solar (quadrillion Btu)']) };
        });
    };
    
}

elfApp.service('renewableUtils', RenewableUtils);