var express = require('express');
var router = express.Router();
//var fs = require('fs');
var allMongo = require('./all-mongo');
var modelRenewables  = require('../models/renewables');
var connect = require('./connect');

/* GET home page. */
router.get('/', function(request, response, next) {
    'use strict';
    response.render('index', {
        title: 'Angular Solar Explorer Troendle'
    });
});

//var connected = false;

router.get('/all-data', function(request, response) {
    'use strict';
    console.log('AllData route invoked.');
    if (!connect.connected) {
        connect.doConnection();
    }

    console.log('About to find scientists.');
    modelRenewables .find({}, function(err, data) {
                if (err) {
            response.send({
                result: 'err',
                err: err
            }); } else {
        console.log(data.length);
        console.log(data[0]);
        var allData = data;
        
        allMongo.writeData('renewables.json', allData);

        response.send({
            result: 'Success',
            allData: data 
        }); }
    });
});

router.get('/emptyCollection', function(request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection();
    }
    modelRenewables .remove({}, function(err) {
        if (err) {
            response.send({
                result: 'err',
                err: err
            });
        } else {
            response.send({
                result: 'collection removed'
            });
        }
    });
});

router.get('/insertValidCollection', function(request, response) {
    'use strict';
    allMongo.readDataAndInsert(response);
});

router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'Angular Solar Explorer Troendle'
    });
});

router.get('/energy-types/:id', function(request, response, next) {
    'use strict';
    response.render('energy-types/' + request.params.id, {
        title: 'Angular Solar Explorer Troendle'
    });
});

router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {});
});

module.exports = router;