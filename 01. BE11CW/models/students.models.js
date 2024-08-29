const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  registrationNumber: String,
  studentId: Number,
  studentName: String,
  studentProfileImageUrl: String, 
  fatherOrGuardian: String,
  standard: String,
  emergencyContact: Number
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student