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

// Update Task
router.route('/update-task/:id').put((req, res, next) => {
  taskSchema.findByIdAndUpdate(req.params.id, {
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