const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  birthdate: {
    type: Number
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  profilePictureUrl: {
    type: String
  }
}, {timestamps: true})

const User = mongoose.model('User', userProfileSchema)

module.exports = User;