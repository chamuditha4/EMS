const jwt = require('jsonwebtoken');
const util = require('./util');
require('dotenv').config();


const userData = {
  email: "123456",
  username: "tooti"
};
let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// user Model
let userSchema = require('../Models/User');

// CREATE user
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/login-user').post((req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  userSchema .findOne({username: username,password:password },(error, data) => {
    if (error) {
      return next(error)
    } else if(username !== data.username || password !== data.password){
      console.log("Username or Password is Wrong.")
      
    }else{
      const token = util.generateToken(data);
      const userObj = util.getCleanUser(data);
      return res.json({ user: userObj, token });
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
    userSchema .find((error, data) => {
      if (error) {
        return next(error)
      } else {
        let filtered_data = data.map(({_id, name, username, email, salary, roll}) => ({_id, name, username, email, salary, roll}));
        res.json(filtered_data)
      }
    })
  })

  router.route('/:id').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// READ Students
router.route('/employees').get((req, res) => {
  userSchema .find({roll:"Employee"},(error, data) => {
    if (error) {
      return next(error)
    } else {
      let emp_data = data.map(({name, _id}) => ({name, _id}));
      res.json(emp_data)
    }
  })
})


// Get Single Student
router.route('/verifyToken').get((req, res) => {
    var token = req.body.token || req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });

      // get basic user details
      var userObj = util.getCleanUser(user);
      return res.json({ user: userObj, token });
    });
})

// Update User
router.route('/update-user/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
      
    } else {
      res.json(data)
      console.log('Task updated successfully !')
    }
  })
})

module.exports = router;