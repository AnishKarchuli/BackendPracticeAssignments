const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeImageUrl: String,
  employeeName: String,
  employeeDesignation: String,
  employeeId: Number,
  employeeDob: Date,
  employeeEmail: String,
  employeeTelephoneNo: Number,
  employeeAddress: String
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee;