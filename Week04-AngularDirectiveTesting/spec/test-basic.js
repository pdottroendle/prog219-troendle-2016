/*global scope expect inject*/
describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    var scope;
    var mainController;
    var $templateCache;
    var $compile;

    // Load the elfApp module from control.js with reference in layout.jade
    beforeEach(module('elfApp'));

    /*
     * instantiate the controller stand-alone, without the directive
     * We also get the Angular compiler and templateCache so we can process angular templates
     */
    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });
});

it('tests scope variable access in template loaded through raw text', function() {
        'use strict';
        $templateCache.put('marie',
                '<div id="marie">' +
                '   <p><span class="caption">First</span>: {{marie.firstName}}</p>' +
                '   <p><span class="caption">Last</span>: {{marie.lastName}}</p>' +
                '   <p><span class="caption">City</span>: {{marie.city}}</p>' +
                '</div>');

        var element = $compile('<elf-marie></elf-marie>')(scope);
        scope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('Paris');
});