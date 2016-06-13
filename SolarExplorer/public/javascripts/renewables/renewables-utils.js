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
            return renewable.Year;
        });
    };

    this.getWood = function() {
        return renewables.map(function(renewable) {
            return {
                wood: renewable['Wood biomass (quadrillion Btu)']
            };
        });
    };

    this.getByYear = function(year) {
        for (var i = 0; i < renewables.length; i++) {
            if (String(year) === renewables[i].Year) {
                return {
                    index: i,
                    renewable: renewables[i]
                };
            }
        }
    };

    this.getSimpleFormat = function() {
        return renewables.map(function(renewable) {
            return {
                geo: Number(renewable['Geothermal (quadrillion Btu)']),
                wind: Number(renewable['Wind power (quadrillion Btu)']),
                solar: Number(renewable['Solar (quadrillion Btu)'])
            };
        });
    };

    this.getSimpleStringFormat = function() {
        return renewables.map(function(renewable) {
            return {
                geo: String(renewable['Geothermal (quadrillion Btu)']),
                wind: String(renewable['Wind power (quadrillion Btu)']),
                solar: String(renewable['Solar (quadrillion Btu)'])
            };
        });
    };
    
    this.getComplexFormat = function(simpleRenewables) {
    return simpleRenewables.map(function(renewable) {
        return {
            Year: renewable.year,
            'Solar (quadrillion Btu)': renewable.solar,
            'Geothermal (quadrillion Btu)': renewable.geothermal,
            'Wind power (quadrillion Btu)': renewable.wind,
            'Other biomass (quadrillion Btu)': renewable.biomass,
            'Liquid biofuels (quadrillion Btu)': renewable.biofuels,
            'Wood biomass (quadrillion Btu)': renewable.wood,
            'Hydropower (quadrillion Btu)': renewable.hydropower
            };
        });
    };

}

elfApp.service('renewableUtils', RenewableUtils);
