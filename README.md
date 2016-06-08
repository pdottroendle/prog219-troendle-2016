HI back - week06 restored 5/18/2016 7:58pm

# Prog219 Troendle

Prog 219 in spring 2016 at Bellevue College

## Week 05 Branch

- [Angular Solar Starter Assignment][solar-start]

[solar-start]:http://www.ccalvert.net/books/CloudNotes/Assignments/AngularSolarStarter.html

## Week 06 Branch


- [Angular Solar Starter Tests Assignment][solar-start-test]
[solar-start-test]:http://www.ccalvert.net/books/CloudNotes/Assignments/AngularSolarStarterTests.html

     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

Calvert is my instructor

# Week10-AngularMongooseBasics
by Charlie Calvert



mongo 
show dbs


use test


show collections


db.scientists.find()

db.scientists.find( {} , {"firstname":1})


 db.scientists.find({} , {_id:0, firstname: 1, lastname: 1}  )
 
 
 ./mongod
 
 
 
 
=========================================== Finals:
cd
./mongod --repair

close with ctrl Calvert



> db.prog219_calvert_settings.find()  _  underscores

Local MongoDb
MLab
=========================================Click new button on index.jade 
Database Page  => ========================================= Home page
Database button       JSON / Database
Local MongoDB button  MLAB / Local MongoDB
 New comment box
Submit button


prog-calvert-renewabl;es
prog219-calvert-settings
prog-calvert-renewabl;es
prog272-calvert-renewabl;es
prog-calvert-renewabl;es
prog-calvert-renewabl;es

================================apps.js
/energy-selector
/energy-selector/...page
EnergySe4lectorController 

================================renewables.js
define(['jquery'],function($){
 'use strict'
 
var index = 0;
var useDatabase = false;

function getRenewables
var routeType = useDatabase ? 0 : 1;

function renewableRoutes = ['/allRenewables', '/renewables/]
$.getJSON(renewableRoutes[routeType],function(response){
 renewables.renewablesList =response.renewables;
 showrenewable(renewable.renewabbleList(index);
 })
 .fail(function(a,b,c){
 console.log('Error',a,b,c);
 $('#debug').html('Error occured: ',a.status);
 })
 .done(function){}
 .always(function){}
 });
 }
 
 function getSimpleKeys(renewable){
return{
..
year: renewable.Year,
hydropower: renewable["dstgaasfdh"],
hydropower: renewable("dstgaasfdh")
hydropower: renewable("dstgaasfdh")
};
)

function showRenewables (renewable) {
 if(!useDatabae( {
rtenewable =getSimpleKey(renewable);
}
$(yearView).Val(renwable.year);


======================= Schema ====================================SolarExplorer/models/settings.js
var mongoose = require('mongoose');

var settingsSchema = mongoose.Schema({
    "keyNote": String,
    "dataSource": String,
    "dataType": String,
    "comment": String
});

module.exports = mongoose.model('prog219_lastname_setting', settingsSchema);
==================================================================================== update package.json
npm install mongoose --save
evtl bower install bootstrap

==============================================================================================routes/database.js
var express = require('express');
var router = express.Router();
var settings = require('../models/settings');
var connect = require('./connect');

/* GET users listing. */
router.get('/', function(req, res, next) {
    'use strict';
    res.send('respond with a resource');
});

// INSERT new one pass the client data
function saveSettings(request, response) {
    console.log('request body', request.body);

    var newSettings = new settings({
        "keyNote": 'settings',
        "dataSource": request.body.dataSource,
        "dataType": request.body.dataType,
        "comment": request.body.comment
    });

    console.log('inserting', newSettings.comment);

    newSettings.save(function(err) {
        console.log('saved: ', newSettings.dataSource, newSettings.dataType, newSettings.comment);
        response.send({ result: 'success', query: request.body});

    });
}
// try to find one keynote set to settings  update data from data send back to the client
router.post('/updateSettings', function(request, response) {
    console.log('request body', request.body);
    if (!connect.connected) {
        connect.doConnection();
    }

    settings.findOne({keyNote: 'settings'}, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            response.send({result: 'error'});
        } else {
            if(doc === null) {
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
    console.log('request body', request.body);
    if (!connect.connected) {
        connect.doConnection();
    }

    settings.findOne({keyNote: 'settings'}, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            response.send({result: 'error'});
        } else {
            if(doc === null) {
                response.send({settings: {dataType: 'Database', dataSource: 'Local MongoDb', comment: 'Default Comment'}})
            } else {
                response.send({settings: doc});
            }
        }
    });
});

module.exports = router;

=========================================================================================================================  routes/connect.js
copy it from Week10-angularMongoose 
change:

  simpleConnect: function() {
        var url= 'mongodb://127.0.0.1:27017/renew';    // creates a new db automatically if it does not exist
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },


==============================================================================================================================================apps.js
var database = require('./routes/database');
..
app.use('/database', database);


================================================================================================================================================ home.jade
//
   Created by charlie on 5/20/16.

.container
    h1 Home

    #qux
        p MainData: {{mainData}}

    .panel.panel-default
        .panel-heading Settings
        .panel-body
            form(ng-submit='submit()')                             //Database button
                select(ng-model='formData.dataType')
                    option Database
                    option JSON
                hr
                select(ng-model='formData.dataSource')            // Local MongoDB button
                    option Local MongoDb
                    option MLab
                hr
                input(type="text", ng-model='formData.comment')

                hr
                button.btn.btn-primary(type="submit") Submit       //submit button
    .panel.panel-default
        .panel-heading Results
        .panel-body
            pre Mirror: {{resultMirror}}
            hr
            pre Full: {{resultFull}}
            
=========================================================================== public/javascript/home.js
var elfApp = angular.module('elfApp');

elfApp.controller('HomeController', function ($scope, $http) {
    'use strict';

    $scope.mainData = 'HomeController MainData';
    $scope.resultFull = '/database/saveSettings';
    $scope.resultMirror = '/database/saveSettings';
    $scope.list = ['foo'];
    $scope.formData = {
        'dataType': 'a',
        'dataSource': 'b',
        'comment': 'c'
    };
    $scope.text = 'hello';

    $scope.submit = function () {
        $http.post('/database/updateSettings', $scope.formData).then(function (result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.query, null, 4);
        }, function(err) {
            console.log(err);
        });
        console.log($scope.formData);
    };

// retrieved real data or default (if none) from the database  
    function readSettings() {
        $http.get('/database/getSettings').then(function (result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.settings, null, 4);
            $scope.formData = {
                'dataType': result.data.settings.dataType,
                'dataSource': result.data.settings.dataSource,
                'comment': result.data.settings.comment
            };
        }, function(err) {
            console.log(err);
        });
        console.log($scope.formData);
    }
    readSettings();
});


========================================================
npm start

home page write somecommnet

mongo
show dbs
use renew
show collections
db.prog219_clavert_settings.find();


we get one record 
{   "_id" : ObjectId("dzrxhsdfhsdfhsdfaghsrag......."), "keynote" : "settings" , "dataSource":"Local MongoDb", :dataType" : "Database"                                  }
{   "_id" : ObjectId("dzrxhsdfhsdfhsdfaghsrag......."), "keynote" : "settings" , "dataSource":"MLab", :dataType" : "JSON"     

========================================== notepad copy from week08 create from scratch



=============
============= PROG 272 MELD!!!!!!!!!!!!!!!

var request = {firstName: 'foo',lastName: 'bla'} , {firstName: 'foo2',lastName: 'bla2'}

$getJSON('/myRoute',request , function(result) {

router.get('/myRoute', function(request, response){
console.log(request.query[0].firstName);

~/Git/JsObjects/Data code examples



GIT


$ git remote -v
origin	git@github.com:pdottroendle/prog219-troendle-2016.git (fetch)
origin	git@github.com:pdottroendle/prog219-troendle-2016.git (push)

temp
git clone


~/Git/prog219-troendle-2016 (week10)


Cbcuser@pristine2016:~/temp
$ meld prog219-troendle-2016/ ~/Git/prog219-troendle-2016




routes/connect.js
doConnection: function(usesimple .... . false   ->  Mplab!!

================================











