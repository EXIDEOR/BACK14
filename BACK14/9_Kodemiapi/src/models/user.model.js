const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
    },
})

const User = mongoose.model('user', userSchema)

module.exports = user