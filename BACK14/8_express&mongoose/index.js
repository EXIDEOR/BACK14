const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koder.model')

const PORT = 8080

const DB_USER = 'fegoMDB'
const DB_PASSWORD = 'it8JYLhDzVAC6mp'
const DB_HOST = 'cluster0.nqo5u.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const app = express()

app.get('/', (req, res) => {
    res.end('andanding...')
})

app.get('/koders', async (req, res) => {
    try {
        const koders = await Koder.find({})
        res.json(koders)

    }catch(error) {
        res.statusCode = 500
        res.json({ success: true})
    }

})

mongoose
.connect(URL)
.then(async (connection) => {
    console.log('DB enlazado')
    
    //arrancar servidor después de conectarnos a DB
    app.listen(PORT, () =>{
        console.log('server andanding')
    })
})
.catch((error) => {
        console.error(error)
    })