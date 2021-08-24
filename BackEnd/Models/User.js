const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  salary: {
    type: String
  },
  roll: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('users', userSchema)