const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 12,
        required: true
    },
    lastName: {
        type: String,
        minlength: 4,
        maxlength: 12,
        required: true
    },
    gender: {
        type: String,
        required: true,
        maxlength: 6,
        enum: ['male', 'female', 'other']
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    }
})

const Koder = mongoose.model('koder', koderSchema)

//EXPORTAMOS MODELO KODER
module.exports = Koder