let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let AnnouncementSchema = require('../models/Announcement');





// READ Students
router.route('/').get((req, res) => {
  AnnouncementSchema .find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// CREATE Tasks
router.route('/create-announcement').post((req, res, next) => {
  AnnouncementSchema.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    console.log(data)
    res.json(data)
  }
})
});


module.exports = router;