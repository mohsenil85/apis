var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var port = 7000;

app.use(bodyParser());

mongoose.connect('mongodb://localhost/api');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: false
  },
   date: { 
     type: Date,
     default: Date.now 
   }
});

var User = mongoose.model('User', UserSchema);

app.use(express.static(__dirname + '/public'));
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico'))); 
 
router.use(function(req, res, next){
  console.log(req.method + " :  " + req.url);
  console.log(req.body);
  next();
});

app.get('/', function(req, res){
  res.json({message: 'testing'});
});

router.route('/users')
  .post(function(req, res){
    var user = new User({
      email : req.body.email,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      age : req.body.age,
      date : req.body.date
    });
    user.save(function(err){
      if (err) res.send(err);
      res.json({ message: 'User created' });
    });
  })
  .get(function(req, res){
    User.find(function(err, users){
      if (err) res.send(err);
      res.json(users);
    });
  });

router.route('/users/:user_id')
  .get(function(req, res){
    User.findById(req.params.user_id, function(err, user){
      if (err) res.send(err);
      res.json(user);
    });
  })
  .put(function(req, res){
    console.log(req.params);
    User.findById(req.params.user_id, function(err, user){
      if (err) res.send(err);
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.email = req.body.email;
      user.age = req.body.age;
      user._id = req.body._id;
      user.save(function(err){
        if (err) res.send(err);
        res.json({message: 'User updated'});
      });
    });
  })
  .delete(function(req, res){
    User.remove({
      _id : req.params.user_id
    }, function(err, user){
      if (err) res.send(err);
      res.json({message: 'User deleted'});
    });
  });
    

app.use('/', router);
app.listen(port);
