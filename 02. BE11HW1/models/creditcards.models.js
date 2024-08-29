const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
  creditCardImageUrl: String,
  creditCardNumber: Number,
  creditCardExpiryDate: Number,
  creditCardHolderName: String,
  creditCardNetwork: String
})

const CreditCard = mongoose.model('CreditCard', creditCardSchema)

module.exports = CreditCard;