const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AttendanceSchema = new Schema({
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
    collection: 'attendance'
  })

module.exports = mongoose.model('attendance', AttendanceSchema)