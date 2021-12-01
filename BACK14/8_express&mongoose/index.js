require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koder.model')

const PORT = process.env.PORT

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const app = express()

app.get('/', (req, res) => {
    res.end('andanding...')
})

app.get('/koders', async (req, res) => {
    try {
        const { gender, age } = request.query
        
        const filters = {}

        if (gender) filters.gender = gender
        if (age) filters.age = age

        //Cargar todos los koders
        console.log('filtros: ', filters)
        
        const koders = await Koder.find({filters})
        
        res.json(koders)
    }catch(error) {
        console.error(error)
        res.statusCode = 500
        res.end()
    }

})

app.post('/koders', async (req, res) => {
    try {
        const { name, lastName, gender, age } = req.body

        const newKoder = await Koder.create({
            name,
            lastName,
            gender,
            age
        })

        res.statusCode = 201
        res.json({
            success: true,
            data: {
                koder: newKoder,
            },
        })
    }catch (error) {
        res.statusCode = 400
        res.json({
            success: false,
            error,
        })
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