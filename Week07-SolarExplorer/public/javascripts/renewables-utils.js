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
    
        this.getWood = function() {
        return renewables.map(function(renewable) {
            return { wood: renewable["Wood biomass (quadrillion Btu)"] };
        });
    };
    
    this.getByYear = function(year) {
        for (var i = 0 ; i < renewables.length ; i++) {
            if (String(year) === renewables[i].Year)
            {
                return {
                    index: i,
                    renewable: renewables[i]
                }
            }
        }
    };
    
    this.getSimpleFormat = function() {
        return renewables.map(function(renewable) {
        return  { geo : Number(renewable['Geothermal (quadrillion Btu)']) , 
                  wind : Number(renewable['Wind power (quadrillion Btu)']) ,
                  solar : Number(renewable['Solar (quadrillion Btu)']) } ;
        });
    };
    
    var simpleFormat = {
  geo: 1,
  solar: 2,
  wind: 3
}
    
    this.getSimpleStringFormat = function() {
        return renewables.map(function(renewable) {
        return  { geo : String(renewable['Geothermal (quadrillion Btu)']) , 
                  wind : String(renewable['Wind power (quadrillion Btu)']) ,
                  solar : String(renewable['Solar (quadrillion Btu)']) };
        });
    };
    
}

elfApp.service('renewableUtils', RenewableUtils);