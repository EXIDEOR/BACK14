const express = require('express')
const fs = require('fs/promises')

const ENCODING = 'utf8'
const KODERS_FILE = 'koders.json'

const router = express.Router

//--------FUNCION PARA VALIDAR DATOS GUARDADOS------------------
function isValidKoder(koder) {
    return koder.nombre && koder.genero
}

router.get('/', async (req, res) => {
    const koders = await loadKoders()
    
    const count = parseInt(req.query.count ?? 0)
    const gender = req.query.gender
    
    let responseData = null
    if (gender) {
        responseData = koders.filter((koders) => koder.genero === gender)
    }
    
    if (count) {
        const dataToCount = responseData ?? koders
        responseData = koders.splice(0, count)
    }
    
    res.json(responseData)
})

router.post('/', async (req, res) => {
    const koders = await loadKoders()
    const newKoder = req.body
    
    if(isValidKoder(newKoder)) {
        res.statusCode = 400
        res.end('NAH AH, AGREGA UN KODER VALIDO... バカ')
        
        return
    }
    
    res.statusCode = 201
    koders.push(newKoder)
    await saveKoders(koders)
    
    res.json(newKoder)
})

router.patch('/:name', async (req, res) => {
    const koders = await loadKoders()
    
    const newKoder = req.body
    const koderName = req.params.name
    
    if(isValidKoder(newKoder)) {
        res.statusCode = 400
        res.end('NAH AH, AGREGA UN KODER VALIDO... バカ')
        
        return
    }
    
    const koderIndex = koders.findIndex(koder => koder.name === koderName)
    
    if(koderIndex === -1) {
        res.statusCode = 404
        res.end('aqui no hay nada bruh')
    }
    
    koders[koderIndex].nombre = newKoder.nombre
    koders[koderIndex].genero = newKoder.genero
    
    await saveKoders(koders)
    
    res.json(newKoder)
})



//HELPER FUNCTIONS
//-------FUNCION CARGAR KODERS----------------------------
async function loadKoders() {
    try{
        const content = await fs.readFile(KODERS_FILE, newContent, ENCODING)
        const parseFile = JSON.parse(content) 
        
        return parsedFile.koders
    }catch (error) {
        console.error('NO SE CARGÓ NADA DUUUDE! D:')
        console.error(error)
        
        return []
    }
}

//-------FUNCION PARA GUARDAR KODERS----------------------------
async function saveKoders(koders) {
    try{
        const mentores = await loadMentores()
        const newObject = {koders, mentores: [] }
        const newContent = JSON.stringify(newObject, null, 4)
        
        await fs.writeFile(KODERS_FILE, newContent, ENCODING)
    }catch (error) {
        console.error('NO SE GUARDOO NADA, DUUUUDE! D:')
        console.error(error)
        
        return []
    }
}

module.exports = router