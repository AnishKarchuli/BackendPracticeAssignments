const mongoose = require('mongoose');

const facebookPostSchema = new mongoose.Schema({
  postOwner: String,
  ownerThumbnailImageUrl: String,
  datePosted: Date,
  postDetail: String,
  postImageUrl: String,
  postComment: Number,
  postShare: Number,
  postLikeOrLove: Number
})

const Post = mongoose.model('Post', facebookPostSchema)

module.exports = Post;