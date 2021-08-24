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

module.exports = router;