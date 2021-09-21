let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let ChatSchema = require('../models/Chat');





// READ Announcement
router.route('/').get((req, res) => {
  ChatSchema .find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// CREATE Announcement
router.route('/create-chat').post((req, res, next) => {
  ChatSchema.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    console.log(data)
    res.json(data)
  }
})
});

// READ Announcement
router.route('/:user').get((req, res) => {
  ChatSchema .find({eid:req.params.user},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// READ Announcement
router.route('/read/:dept').get((req, res) => {
  ChatSchema .find({department:req.params.dept},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/get-announcement/:id').get((req, res) => {
  ChatSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Announcement
router.route('/update-announcement/:id').put((req, res, next) => {
  ChatSchema.findByIdAndUpdate(req.params.id, {
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

// Delete announcement
router.route('/delete-announcement/:id').delete((req, res, next) => {
  ChatSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;