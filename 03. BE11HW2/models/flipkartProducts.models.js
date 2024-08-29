const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productImageUrl: String,
  productName: String,
  productStarRating: Number,
  productRatings: Number,
  productReviews: Number,
  productBadge: String,
  productSpecialPrice: Number,
  productMarkedPrice: Number,
  productDiscount: Number,
  productOffers: String,
  productWarrantyDetails: String,
  productVariant: String,
  productWifiConnectivityStatus: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;