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