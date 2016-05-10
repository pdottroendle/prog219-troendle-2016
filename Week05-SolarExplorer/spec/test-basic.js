/*global inject*/
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

    // Load Renewable.html so we can test against it
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('Renewable.html');
    });

fit('should find the index', function() {
    expect( scope.index).toBe(0);
});

fit('should have a getRenewable method ', function() {
    expect(scope.getRenewable).toBeDefined();
});

it('should be possible to access the fixture', function() {
    var spanElement = document.getElementById('renewable');
    expect(spanElement).toBeDefined();        
});

    it('should be possible to access the renewable fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('Year');
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('tests scope variable access in template loaded through raw text', function() {
        $templateCache.put('renewable',
            '<div id="renewable">' +
            '   <p><span class="caption">Year</span>: {{renewable.Year}}</p>' +
            '   <p><span class="caption">Solar (quadrillion Btu)</span>: {{renewable.Solar (quadrillion Btu)}}</p>' +
            '   <p><span class="caption">Geothermal (quadrillion Btu)</span>: {{renewable.Geothermal (quadrillion Btu)}}</p>' +
            '   <p><span class="caption">Other biomass (quadrillion Btu)</span>: {{renewable.Other biomass (quadrillion Btu)}}</p>' +
            '   <p><span class="caption">Wind power (quadrillion Btu)</span>: {{renewable.Wind power (quadrillion Btu)}}</p>' +
            '   <p><span class="caption">Liquid biofuels (quadrillion Btu)</span>: {{renewable.Liquid biofuels (quadrillion Btu)}}</p>' +
            '   <p><span class="caption">Wood biomass (quadrillion Btu)</span>: {{renewable.Wood biomass (quadrillion Btu)}}</p>' +
            '   <p><span class="caption">Hydropower (quadrillion Btu)</span>: {{renewable.Hydropower (quadrillion Btu)}}</p>' +
            '</div>');

        var element = $compile('<elf-renewable></elf-renewable>')(scope);
        scope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('2.5859957');
    });

    it('tests scope variable access in template loaded through fixture', function() {
        // Get element from fixture
        scope.renewable = [{
            "Year": "2017",
            "Solar (quadrillion Btu)": "0.8045307",
            "Geothermal (quadrillion Btu)": "0.2349284",
            "Other biomass (quadrillion Btu)": "0.50916",
            "Wind power (quadrillion Btu)": "2.202328",
            "Liquid biofuels (quadrillion Btu)": "1.2329197",
            "Wood biomass (quadrillion Btu)": "1.9860924",
            "Hydropower (quadrillion Btu)": "2.5859957"
        }];

        var el = document.getElementById('renewable');

        $templateCache.put('renewable', el);
        var element = $compile('<elf-renewable></elf-renewable>')(scope);
        scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain('2.5859957');
    });

});