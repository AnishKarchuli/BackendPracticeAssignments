const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
  fruitImageUrl: String,
  fruitName: String,
  fruitInfo: String,
  fruitCalories: Number,
  fruitCarbs: Number,
  fruitProtein: Number,
  fruitUnsaturatedFat: Number
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit;