var express = require('express');
var router = express.Router();
var Settings = require('../models/settings');
var connect = require('./connect');

/* GET users listing. */
router.get('/', function (req, res, next) {
    'use strict';
    res.send('respond with a resource');
});

router.get('/all-data', function (request, response) {
    'use strict';
    console.log('AllData route invoked.');
    if (!connect.connected) {
        connect.doConnection();
    }

    function saveSettings(request, response) {
        'use strict';
        console.log('request body', request.body);

        var newSettings = new Settings({
            'keyNote': 'settings',
            'dataSource': request.body.dataSource,
            'dataType': request.body.dataType,
            'comment': request.body.comment
        });

        console.log('inserting', newSettings.comment);

        newSettings.save(function (err) {
            if (err) {
                response.send({
                    result: 'err',
                    err: err
                });
            } else {
                //'use strict';
                console.log('saved: ', newSettings.dataSource, newSettings.dataType, newSettings.comment);
                response.send({
                    result: 'success',
                    query: request.body
                });
            }
        });

        router.post('/updateSettings', function (request, response) {
            'use strict';
            console.log('request body', request.body);
            if (!connect.connected) {
                connect.doConnection();
            }

            Settings.findOne({
                keyNote: 'settings'
            }, function (err, doc) {
                //'use strict';
                console.log('findone', err, doc);
                if (err) {
                    response.send({
                        result: 'error'
                    });
                } else {
                    if (doc === null) {
                        saveSettings(request, response);
                    } else {
                        doc.dataType = request.body.dataType;
                        doc.dataSource = request.body.dataSource;
                        doc.comment = request.body.comment;
                        doc.save();
                    }
                }
            });
        });

        router.get('/getSettings', function (request, response) {
            'use strict';
            console.log('request body', request.body);
            if (!connect.connected) {
                connect.doConnection();
            }

            Settings.findOne({
                keyNote: 'settings'
            }, function (err, doc) {
                //'use strict';
                console.log('findone', err, doc);
                if (err) {
                    response.send({
                        result: 'error'
                    });
                } else {
                    if (doc === null) {
                        response.send({
                            settings: { // undercase  its used in home.js line 7
                                dataType: 'Database',
                                dataSource: 'Local MongoDb',
                                comment: 'Default Comment'
                            }
                        });
                    } else {
                        response.send({
                            settings: doc
                        });
                    }
                }
            });
        });

        module.exports = router;