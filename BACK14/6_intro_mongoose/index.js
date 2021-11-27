const mongoose = require('mongoose')

const DB_USER = 'fegoMDB'
const DB_PASSWORD = 'it8JYLhDzVAC6mp'
const DB_HOST = 'cluster0.nqo5u.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

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

mongoose
    .connect(URL)
    .then(async (connection) => {
        console.log('DB enlazado')

        await Koder.create({
            name:'Rafa',
            lastName:'Martínez',
            age:21,
            gender:'male'
        })

        const koders = await Koder.find({})
        console.log(koders)
    })
    .catch((error) => {
        console.error(error)
    })