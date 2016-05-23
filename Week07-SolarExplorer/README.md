# Week04-AngularDirectiveTesting
by Charlie Calvert
student: Peter-Paul Troendle


Karma problems:
npm install & bower insatll
npm install -g karma
npm install karma-jasmine --save-dev
npm install karma-spec-reporter --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-spec-reporter --save-dev
npm install -g phantomjs-prebuilt
karma start
 bower install bootstrap angular angular-mocks --save
 
 
 
 Elvenware Fixture and Template Cache Suite
  ✓ expects true to be true
  ✓ should find the index
  ✓ should have a getRenewable method
  ✓ should be possible to access the fixture
  ✓ tests template loaded through simple raw text
  ✓ tests template loaded through more complex raw text
  ✓ tests scope variable access in template loaded through fixture

Elvenware Simple Mocks with HttpBackend Suite
  ✓ proves we can run tests
  ✓ should find the index
  ✓ should have a getRenewable method
  ✓ proves we can detect request

Renewables Suite
  ✓ proves we can run tests
  ✓ proves we can get renewableUtils name
  ✓ proves we can get renewableUtils method called getItemCount
  ✓ proves we can get from renewableUtils a particular renewable object by index
  ✓ proves we can transform our json into a new array consisting only of years
  ✓ proves we can get our wood map
  ✓ proves our array of years contains the expected data
  ✓ proves we can transform our json into an array with three properties: geo, solar, and wind
  ✓ proves that getSimpleStringFormat returns the expected string data
  ✓ proves that getSimpleFormat returns the expected numeric data

Simple Format HttpBackend Suite
  ✓ expects true to be true
  ✓ tests simple-format directive loaded through fixture with httpBackend
  ✓ tests that we can index to the fifth element

Simple Format Exercises Suite
  ✓ expects true to be true
  ✓ proves renewables.getByYear returns index & expected object
  ✓ tests that we can get an item in simpleFormat by Year
  ✓ tests that we can get an item in simpleFormat by Year

Simple Format Fixture Suite
  ✓ expects true to be true
  ✓ should find the index
  ✓ should be possible to access the fixture
  ✓ should be possible to access the fixture and put real data in it.

PhantomJS 2.1.1 (Linux 0.0.0): Executed 32 of 32 SUCCESS (0.108 secs / 0.258 secs)
TOTAL: 32 SUCCESS
