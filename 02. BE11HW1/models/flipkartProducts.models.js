const mongoose = require('mongoose');

const flipkartProductSchema = new mongoose.Schema({
  productImageUrl: String,
  productName: String,
  productStarRating: Number,
  productRatings: Number,
  productReviews: Number,
  productDescription: String,
  productFinalPrice: Number,
  productActualPrice: Number,
  productDiscount: Number,
  productDeliveryCharges: String,
  productStock: Number,
  productBadge: String
});

const FlipkartProduct = mongoose.model('FlipkartProduct', flipkartProductSchema)

module.exports = FlipkartProduct;