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
  name: {
    type: String,
    required: true,
    trim: true
  }
/*
  email: {
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
*/
});

var User = mongoose.model('User', UserSchema);


router.use(function(req, res, next){
  console.log(req.method + " :  " + req.url);
  next();
});

app.get('/', function(req, res){
  res.json({message: 'testing'});
});

router.route('/users')
  .post(function(req, res){
    var user = new User({
      name : req.body.name
    });
    user.save(function(err){
      if (err) res.send(err);
      res.json({ message: 'user created' });
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
    User.findById(req.params.user_id, function(err, user){
      if (err) res.send(err);
      user.name = req.body.name;
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
    


app.use('/api', router);
app.listen(port);
