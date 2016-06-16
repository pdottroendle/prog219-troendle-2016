var myModule = angular.module('elfApp');

myModule.factory('settings', function () {
    'use strict';

    function settings() {
    }

    settings.useDatabase = true;
    settings.useLocalMongoDb = true;

    var report = function () {
        console.log('useDatabase', settings.useDatabase);
        console.log('useLocalMongoDb', settings.useLocalMongoDb);
    };

    settings.setSettings = function (settings) {
        this.useDatabase = settings.dataType.toLowerCase() === 'database';
        this.useLocalMongoDb = settings.dataSource.toLowerCase() === 'local mongodb';
        report();
    };

    return settings;
});
