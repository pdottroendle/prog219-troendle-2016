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

Home
Database button
Local MongoDB button

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

var index = o
var useDatabase = false

function getRenewables
var routeType = useDatabase ? 0 : 1;

function getRenewable() {

var routeType =








return{
..
hydropower: renewable("dstgaasfdh")
hydropower: renewable("dstgaasfdh")
hydropower: renewable("dstgaasfdh")
hydropower: renewable("dstgaasfdh")
};
)

function showRenewables (renewable) {
 if(!useDatabae( {
rtenewable =getSimpleKey(renewable);
}
$(yearView).Val(renwable.year);

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