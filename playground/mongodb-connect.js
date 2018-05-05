//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//construct a new ID
// var obj = new ObjectID();
// console.log(obj);

// deconstructing
//var user = {name: 'Andrew', age: 35};
//var {name} = user; // ES6 destructuring
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //
    //     if (err) {
    //         return console.log('Unable to insert to-do');
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    // });

    // insert new doc into the users collection
    // name
    // age location

    // db.collection('Users').insertOne({
    //     // _id: 123,
    //     name: 'Guillermo Sanchez',
    //     age: 33,
    //     location: 'Vancouver'
    // }, (err, result) => {
    //
    //     if (err) {
    //         return console.log('Unable to insert user');
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});






