const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['ADMIN', 'USER'] }
}, { collection: 'user' })
module.exports = userSchema