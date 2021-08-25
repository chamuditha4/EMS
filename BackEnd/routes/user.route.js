const jwt = require('jsonwebtoken');
const util = require('./util');
require('dotenv').config();

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
      
      return res.json({ username: userObj, token });
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
    userSchema .find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })




// Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;