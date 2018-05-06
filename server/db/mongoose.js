const mongoose = require('mongoose');

// using the type of promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {
    mongoose
}