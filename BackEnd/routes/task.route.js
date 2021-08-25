let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let taskSchema = require('../models/Task');



// READ Students
router.route('/').get((req, res) => {
  taskSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



module.exports = router;