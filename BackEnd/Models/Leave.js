const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LeaveSchema = new Schema({
  eid: {
    type: String
  },
  time: {
    type: String
  },
  name: {
    type: String
  }
}, {
    collection: 'leave'
  })

module.exports = mongoose.model('leave', LeaveSchema)