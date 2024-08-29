const mongoose = require('mongoose');

const recipeCardSchema = new mongoose.Schema({
  recipeImageUrl: String,
  recipeName: String,
  recipeTagline: String,
  recipeServingsSize: Number,
  recipePreppingTime: Number,
  recipeCookingTime: Number,
  recipeIngredients: String,
  recipeDirections: String,
  recipeNotes: String
})

const Recipe = mongoose.model('Recipe', recipeCardSchema)

module.exports = Recipe;