/*global angular*/
/**
 * Created by charlie on 5/6/2015.
 */

(function() {
    var app = angular.module('elvenApp', []);

    app.controller('ElvenController', function() {
        var elvenController = this;

        elvenController.hint = "My hint.";
        
        elvenController.getNine = function(operandA) {
            return operandA;
        };
        
        elvenController.getSquare = function(operandA) {
            return operandA*operandA;
        };
        
        elvenController.getAdd = function(operandA,operandB) {
            return operandA+operandB;
        };
     
    });

})();