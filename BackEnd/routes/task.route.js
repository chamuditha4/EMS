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

// CREATE Tasks
router.route('/create-task').post((req, res, next) => {
  taskSchema.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    console.log(data)
    res.json(data)
  }
})
});



router.route('/get-task/:id').get((req, res) => {
  taskSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;