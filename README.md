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

==================================================================================== update package.json
npm install mongoose --save
evtl bower install bootstrap
========================================================
npm start

mongo
show dbs
use renew
show collections
db.prog219_clavert_settings.find();

we get one record 
{   "_id" : ObjectId("dzrxhsdfhsdfhsdfaghsrag......."), "keynote" : "settings" , "dataSource":"Local MongoDb", :dataType" : "Database"                                  }
{   "_id" : ObjectId("dzrxhsdfhsdfhsdfaghsrag......."), "keynote" : "settings" , "dataSource":"MLab", :dataType" : "JSON"     

========================================== notepad copy from week08 create from scratch

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