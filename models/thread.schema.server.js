const mongoose = require('mongoose')
const threadSchema = mongoose.Schema({
    subject: String,
    username: String,
    userId: String,
    bookId: String,
    threadTime: { type : Date, default: Date.now }
}, { collection: 'thread' })
module.exports = threadSchema