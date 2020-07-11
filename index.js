const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = express.Router();
const userRoutes = express.Router();
const PORT = process.env.PORT || 5000;

let Todo = require('./todo.model');
let User = require('./user.model');

app.use(cors());
app.use(bodyParser.json());


// add the path module
const path = require('path');
// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
// pass the static files (react app) to the express app. 
app.use(staticFiles)
const mlabURL = 'mongodb://admin:password1@ds341837.mlab.com:41837/heroku_bnbrs8p0'

let uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/todo-app';
/*const db = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

/*let localConnectionStr = 'mongodb://127.0.0.1:27017/todos';
let atlasConnectionStr = 'mongodb+srv://admin:R0ckl1n##@cluster0.tcwm1.mongodb.net/todo-app?retryWrites=true&w=majority';*/

mongoose.connect(uristring, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB connection established successfully');
})

todoRoutes.route('/').get(function(req, res){
    Todo.find(function(err,todos){
        if(err){
            console.log(err);
        } else {
            res.json(todos); 
        }
    });
});

todoRoutes.route('/day/:match').get(function(req, res){
    let match = parseInt(req.params.match);
    Todo.find({day: match}, function(err,todos){
        if(err){
            console.log(err);
        } else {
            res.json(todos); 
        }
    });
});

todoRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Todo.findById(id, function(err, todo){
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added succesfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if(!todo) {res.status(404).send('data not found');}
        else {
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.completed = req.body.completed;

            todo.save().then(todo => {
                res.json('Todo Updated')
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
        }

    });
});
todoRoutes.route('/delete/:id').post(function (req, res) {
    Todo.findOneAndRemove({_id: req.params.id}, (err, todo) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Todo successfully deleted",
            id: req.params.id
        };
        return res.status(200).send(response);
    });
});


userRoutes.route('/').get(function(req, res){
    User.find(function(err,users){
        if(err){
            console.log(err);
        } else {
            res.json(users); 
        }
    });
});
userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added succesfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});
userRoutes.route('/delete/:id').post(function (req, res) {
    User.findOneAndRemove({_id: req.params.id}, (err, user) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "User successfully deleted",
            id: req.params.id
        };
        return res.status(200).send(response);
    });
});
userRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    User.findById(id, function(err, todo){
        res.json(todo);
    });
});
userRoutes.route('/update/:id').post(function(req, res){
    User.findById(req.params.id, function(err, todo){
        if(!todo) {res.status(404).send('data not found');}
        else {
            user.title = req.body.title;
            user.firstName = req.body.description;
            user.lastName = req.body.responsible;
            user.username = req.body.priority;
            user.password = req.body.completed;

            user.save().then(todo => {
                res.json('User Updated')
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
        }

    });
});
userRoutes.route('/username/:match').get(function(req, res){
    let match = req.params.match;
    User.find({username: match}, function(err,todos){
        if(err){
            console.log(err);
        } else {
            res.json(todos); 
        }
    });
});
userRoutes.route('/password/:match').get(function(req, res){
    let match = req.params.match;
    User.find({password: match}, function(err,todos){
        if(err){
            console.log(err);
        } else {
            res.json(todos); 
        }
    });
});

app.use(express.static('client/build'));
app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

app.listen(PORT, function(){
    console.log('Server running on Port: ' + PORT);
});
