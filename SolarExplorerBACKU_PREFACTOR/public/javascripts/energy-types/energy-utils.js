/*global angular*/
var elfApp = angular.module('elfApp');

function EnergyUtils() {
    'use strict';

    var energys;

    this.name = 'energyTypes';
    
    this.init = function(initRenewables) {
        energys = initRenewables;
    };

    this.getItemCount = function() {
        return energys.length;
    };

    this.getByIndex = function(index) {
        return energys[index];
    };

    this.getYears = function() {
        return energys.map(function(energy) {
            return energy.Year;
        });
    };

    this.getWood = function() {
        return energys.map(function(energy) {
            return {
                wood: energy['Wood biomass (quadrillion Btu)']
            };
        });
    };

    this.getByYear = function(year) {
        for (var i = 0; i < energys.length; i++) {
            if (String(year) === energys[i].Year) {
                return {
                    index: i,
                    energy: energys[i]
                };
            }
        }
    };

    this.getSimpleFormat = function() {
        return energys.map(function(energy) {
            return {
                geo: Number(energy['Geothermal (quadrillion Btu)']),
                wind: Number(energy['Wind power (quadrillion Btu)']),
                solar: Number(energy['Solar (quadrillion Btu)'])
            };
        });
    };

    this.getSimpleStringFormat = function() {
        return energys.map(function(energy) {
            return {
                geo: String(energy['Geothermal (quadrillion Btu)']),
                wind: String(energy['Wind power (quadrillion Btu)']),
                solar: String(energy['Solar (quadrillion Btu)'])
            };
        });
    };

}

elfApp.service('energyTypes', EnergyUtils);
