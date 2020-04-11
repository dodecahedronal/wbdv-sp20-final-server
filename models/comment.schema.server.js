const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    content: String,
    threadId: String,
    username: String,
    userId: String,
    bookId: String,
    commentTime: { type : Date, default: Date.now }
}, { collection: 'comment' })
module.exports = commentSchema