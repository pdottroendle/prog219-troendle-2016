var express = require('express');
var router = express.Router();
var Settings = require('../models/settings');
var connect = require('./connect');

/* GET users listing. */
router.get('/', function(req, res, next) {
    'use strict';
    res.send('respond with a resource');
});

// INSERT new one pass the client data
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

    newSettings.save(function(err) {
        console.log('saved: ', newSettings.dataSource, newSettings.dataType, newSettings.comment);
        response.send({
            result: 'success',
            query: request.body
        });

    });
}
// try to find one keynote set to settings  update data from data send back to the client
router.post('/updateSettings', function(request, response) {
    'use strict';
    console.log('updateSettings ----->', request.body);

    var useLocalMongoDb = false; //request.body.dataSource.toLowerCase() === 'local mongodb';
    console.log('get client selection ---->', useLocalMongoDb);
    if (!connect.connected) {
        if (useLocalMongoDb) {
            connect.doConnection();
            console.log('client selection local MongoDb accepted');
        } else {
            connect.doConnectionMlab();
            console.log('client selection Mlab accepted');
        }
    }
    /*if (!connect.connected) {
     connect.doConnection();
     }*/

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
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
// 4 fields in there see setting.js
router.get('/getSettings', function(request, response) {
    'use strict';
    console.log('getSettings ------>', request.body);

    var useLocalMongoDb = true; //request.body.dataSource.toLowerCase() === 'local mongodb';
    console.log('get client selection ---->', useLocalMongoDb);
    if (!connect.connected) {
        if (useLocalMongoDb) {
            connect.doConnection();
            console.log('client selection local MongoDb accepted');
        } else {
            connect.doConnectionMlab();
            console.log('client selection Mlab accepted');
        }
    }
    /*if (!connect.connected) {
     connect.doConnection();
     }*/

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                response.send({
                    settings: {
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
