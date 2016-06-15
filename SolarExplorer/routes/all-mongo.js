var express = require('express');
var connect = require('./connect');
var ModelRecords = require('../models/renewables');
var fs = require('fs');

var allData;
var totalRecordsSaved = 0;

function allMongo() {
    'use strict';
}

allMongo.numberOfRecords = 0;

function insertRecords(record, response) {
    'use strict';
    // var renewable = getSimpleKeys(record); refactor option
    if (!connect.connected) {
        connect.doConnection();
    }
    console.log('00000000000000000');
    console.log(record.Year);

    var newRecord = new ModelRecords({ // constructor using uppercase (grunt)
        'Year': record.Year,
        'Solar (quadrillion Btu)': record['Solar (quadrillion Btu)'],
        'Geothermal (quadrillion Btu)': record['Geothermal (quadrillion Btu)'],
        'Other biomass (quadrillion Btu)': record['Other biomass (quadrillion Btu)'],
        'Wind power (quadrillion Btu)': record['Wind power (quadrillion Btu)'],
        'Liquid biofuels (quadrillion Btu)': record['Liquid biofuels (quadrillion Btu)'],
        'Wood biomass (quadrillion Btu)': record['Wood biomass (quadrillion Btu)'],
        'Hydropower (quadrillion Btu)': record['Hydropower (quadrillion Btu)']
    });

    console.log('inserting', newRecord.lastName);

    newRecord.save(function (err) {
        totalRecordsSaved++;
        console.log('saved: ', newRecord.lastName, allMongo.numberOfRecords, totalRecordsSaved);

        if (totalRecordsSaved === allMongo.numberOfRecords) {
            response.send({
                result: 'Success Saving Records',
                totalSaved: totalRecordsSaved
            });
        }
        if (err) {
            throw (err);
        }
    });
}

allMongo.writeData = function (fileName, data) {
    'use strict';
    var dataAsString = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, dataAsString, function (err, result) {
        if (err) {
            throw (err);
        }
        console.log('success writing file');
    });
};

allMongo.readDataAndInsert = function (response) {
    'use strict';
    fs.readFile('public/data/Renewable.json', function (err, recordsText) {
        if (err) {
            throw (err);
        }
        var recordsTextAsString = JSON.parse(recordsText);
        // totalRecordsSaved = 0;
        allMongo.numberOfScientists = recordsTextAsString.length;
        for (var i = 0; i < recordsTextAsString.length; i++) {
            insertRecords(recordsTextAsString[i], response);
        }
    });
};

module.exports = allMongo;
