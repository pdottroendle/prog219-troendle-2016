/*global angular*/
/**
 * Created by charlie on 5/6/2015.
 */

(function() {
    var app = angular.module('elvenApp', []);

    app.controller('ElvenController', function() {
        var elvenController = this;

        elvenController.hint = "My hint.";
        
        elvenController.getNine = function() {
            return 9;
        };
        
        elvenController.getSquare = function() {
            var Five = 5;
            var result = Five*Five;
            return result;
        };
        
        elvenController.getAdd = function() {
            var Two = 2;
            var Three = 3;
            var result = Two + Three;
            return result;
        };
        
        
        
    });

})();