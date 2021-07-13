const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const todoRoutes = express.Router();
const PORT = 4000;
var path = require('path');
var dotenv = require('dotenv').config()


let Todo = require('./todo.model');

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const ATLAS_URI = process.env.URI;
mongoose.connect(ATLAS_URI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', _ => {
    console.log('Database connected:', ATLAS_URI)
  })
connection.on("error", console.error.bind(console, "mongo connection error"));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers');
     next();
});

// Original routes

todoRoutes.route('/list/:userid').get(function(req, res) {
    let userid = req.params.userid;
    Todo.find({ user_id : userid },function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/delete/:id').delete((req, res, next) => {
    Todo.findByIdAndRemove(req.params.id, (error, data) => {
      if (!data) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use(express.static(path.join(__dirname, 'build')));
app.use('*', express.static(path.join(__dirname, "client", "build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
module.exports = app;