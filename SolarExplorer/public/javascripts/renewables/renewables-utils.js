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
                //year: Number(renewable.Year),
                //solar: Number(renewable['Solar (quadrillion Btu)']),
                geo: Number(renewable['Geothermal (quadrillion Btu)']),
                solar: Number(renewable['Solar (quadrillion Btu)']),
                //biomass: Number(renewable['Other biomass (quadrillion Btu)']),
                wind: Number(renewable['Wind power (quadrillion Btu)']),
                //biofuels: Number(renewable['Liquid biofuels (quadrillion Btu)']),
                //wood: Number(renewable['Wood biomass (quadrillion Btu)']),
                //hydro: Number(renewable['Hydropower (quadrillion Btu)'])
            };
        });
    };

    this.getSimpleStringFormat = function() {
        return renewables.map(function(renewable) {
            return {
                year: String(renewable.Year),
                solar: String(renewable['Solar (quadrillion Btu)']),
                geo: String(renewable['Geothermal (quadrillion Btu)']),
                biomass: String(renewable['Other biomass (quadrillion Btu)']),
                wind: String(renewable['Wind power (quadrillion Btu)']),
                biofuels: String(renewable['Liquid biofuels (quadrillion Btu)']),
                wood: String(renewable['Wood biomass (quadrillion Btu)']),
                hydro: String(renewable['Hydropower (quadrillion Btu)'])
            };
        });
    };

    this.getComplexFormat = function(simpleRenewables) {
        return simpleRenewables.map(function(renewable) {
            return {
                'Year': renewable.year,
                'Solar (quadrillion Btu)': renewable.solar,
                'Geothermal (quadrillion Btu)': renewable.geo,
                'Other biomass (quadrillion Btu)': renewable.biomass,
                'Wind power (quadrillion Btu)': renewable.wind,
                'Liquid biofuels (quadrillion Btu)': renewable.biofuels,
                'Wood biomass (quadrillion Btu)': renewable.wood,
                'Hydropower (quadrillion Btu)': renewable.hydro
            };
        });
    };
}

elfApp.service('renewableUtils', RenewableUtils);
