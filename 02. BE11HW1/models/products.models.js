const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productImageUrl: String,
  productName: String,
  productCategory: String,
  productInfo: String,
  productColor: String,
  productSize: Number,
  productPrice: Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;