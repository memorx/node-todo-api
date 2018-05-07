var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./db/models/todo');
var {User} = require('./db/models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }), (e) => {
        res.status(400).send(e);
    }
});

app.get('/todos',(req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
        }, (e) => {
            res.status(400).send(e);
        }
    );
});

// GET /todos/123123123

app.listen(3000, () => {
   console.log('Stared on port 3000');
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// var newTodo = new Todo({
//     text: 'Cook dinner',
//     completed: false,
//     completedAt: Date.now()
// });

// var newTodo = new Todo({
//     text: 'Clean the cat'
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var newUser = new User({
//     email: 'd@gmail.com'
// });


// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save user', e);
// });


module.exports = {app};

