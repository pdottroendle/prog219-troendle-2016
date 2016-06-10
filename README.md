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


setup 

jou
cd SetupLinuxBox
./SetupSymbolicLinks

temp/ 
CreateExpressProject nameofproject

rm -rf

interview tips from Charles Calvert ask when failed : what could I do to improve next time

 cp -r ~/workspace/SolarExplorer/ .
 
 package.json
 {
  "name": "Week05-ExpressRoutesSolar",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "postinstall": "node_modules/bower/bin/bower install"
  },
  "dependencies": {
    "bower": "~1.7.9",
    "body-parser": "~1.13.2",    
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}


bower install --save



mongo 
show dbs


use test


show collections


db.scientists.find()

db.scientists.find( {} , {"firstname":1})


 db.scientists.find({} , {_id:0, firstname: 1, lastname: 1}  )
 
=========================================== Finals:
cd
./mongod --repair

close with ctrl Calvert

> db.prog219_calvert_settings.find()  _  underscores

https://docs.mongodb.com/manual/reference/mongo-shell/#command-helpers

db.auth()	If running in secure mode, authenticate the user.
coll = db.<collection>	
Set a specific collection in the current database to a variable coll, as in the following example:

coll = db.myCollection;
You can perform operations on the myCollection using the variable, as in the following example:

coll.find();
db.collection.find()	
Find all documents in the collection and returns a cursor.

See the db.collection.find() and Query Documents for more information and examples.

See Iterate a Cursor in the mongo Shell for information on cursor handling in the mongo shell.

db.collection.insert()	Insert a new document into the collection.
db.collection.update()	Update an existing document in the collection.
db.collection.save()	Insert either a new document or update an existing document in the collection.
db.collection.remove()	Delete documents from the collection.
db.collection.drop()	Drops or removes completely the collection.
db.collection.createIndex()	Create a new index on the collection if the index does not exist; otherwise, the operation has no effect.
db.getSiblingDB()	Return a reference to another database using this same connection without explicitly switching the current database. This allows for cross database queries.

db.collection.find(<query>)	
Find the documents matching the <query> criteria in the collection. If the <query> criteria is not specified or is empty (i.e {} ), the read operation selects all documents in the collection.

The following example selects the documents in the users collection with the name field equal to "Joe":

coll = db.users;
coll.find( { name: "Joe" } );
For more information on specifying the <query> criteria, see Specify Query Filter Conditions.

db.collection.find(<query>, <projection>)	
Find documents matching the <query> criteria and return just specific fields in the <projection>.

The following example selects all documents from the collection but returns only the name field and the _id field. The _id is always returned unless explicitly specified to not return.

coll = db.users;
coll.find( { }, { name: true } );
For more information on specifying the <projection>, see Project Fields to Return from Query.

db.collection.find().sort(<sort order>)	
Return results in the specified <sort order>.

The following example selects all documents from the collection and returns the results sorted by the name field in ascending order (1). Use -1 for descending order:

coll = db.users;
coll.find().sort( { name: 1 } );
db.collection.find(<query>).sort(<sort order>)	Return the documents matching the <query> criteria in the specified <sort order>.
db.collection.find( ... ).limit( <n> )	Limit result to <n> rows. Highly recommended if you need only a certain number of rows for best performance.
db.collection.find( ... ).skip( <n> )	Skip <n> results.
db.collection.count()	Returns total number of documents in the collection.
db.collection.find(<query>).count()	
Returns the total number of documents that match the query.

The count() ignores limit() and skip(). For example, if 100 records match but the limit is 10, count() will return 100. This will be faster than iterating yourself, but still take time.

db.collection.findOne(<query>)	
Find and return a single document. Returns null if not found.

The following example selects a single document in the users collection with the name field matches to "Joe":

coll = db.users;
coll.findOne( { name: "Joe" } );
Internally, the findOne() method is the find() method with a limit(1).