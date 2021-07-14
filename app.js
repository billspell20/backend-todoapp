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

app.use(cors());
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

var whitelist = ['http://www.restaurant-list.com', 'http://restaurant-list.com', 'https://www.restaurant-list.com', 'https://restaurant-list.com'];

var corsOptions = {
origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
},
  methods:["GET", "POST", "OPTIONS", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept", '*'],
  maxAge:-1
};


// Original routes

todoRoutes.route('/list/:userid/').get(cors(corsOptions),function(req, res) {
    let userid = req.params.userid;
    Todo.find({ user_id : userid },function(err, todos) {
        if (err) {
            console.log(err.response.data);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id/').get(cors(corsOptions),function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/update/:id/').post(cors(corsOptions),function(req, res) {
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
                console.log(err.response.data);
            });
    });
});

todoRoutes.route('/add/').post(cors(corsOptions),function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
            console.log(err.response.data)
        });
});

todoRoutes.route('/delete/:id/').delete(cors(corsOptions),(req, res, next) => {
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
app.use('*', express.static(path.join(__dirname, "client", "build")))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports = app;