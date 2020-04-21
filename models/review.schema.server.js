const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    rating: Number,
    content: String,
    userId: String,
    bookId: String,
    username: String,
    reviewTime: { type : Date, default: Date.now }
}, { collection: 'review' })
module.exports = reviewSchema