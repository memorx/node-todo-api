const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to the MongoDB Server');

    //findOneaAdUpdate(filter, update, options, callback)
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID ('5aece44db2ceba77535522ae')
    }, {
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //findOneaAdUpdate(filter, update, options, callback)
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID ('5aece44db2ceba77535522ae')
    }, {
        $set: {
            name: 'Guillermo'
        },
        $inc: {
            age: 1

        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});
