const express = require('express')
const fs = require('fs/promises')

const ENCODING = 'utf8'
const MENTORES_FILE = 'mentores.json'

const router = express.Router

//--------FUNCION PARA VALIDAR DATOS GUARDADOS------------------
function isValidKoder(mentor) {
    return mentor.nombre && mentor.genero
}

router.get('/', async (req, res) => {
    const mentores = await loadKoders()
    
    const count = parseInt(req.query.count ?? 0)
    const gender = req.query.gender
    
    let responseData = null
    if (gender) {
        responseData = mentores.filter((koders) => mentor.genero === gender)
    }
    
    if (count) {
        const dataToCount = responseData ?? mentores
        responseData = mentores.splice(0, count)
    }
    
    res.json(responseData)
})

router.post('/', async (req, res) => {
    const mentores = await loadMentores()
    const newMentor = req.body
    
    if(isValidKoder(newMentor)) {
        res.statusCode = 400
        res.end('NAH AH, AGREGA UN TICHER VALIDO... バカ')
        
        return
    }
    
    res.statusCode = 201
    mentores.push(newMentor)
    await saveMentores(mentores)
    
    res.json(newMentor)
})

router.patch('/:name', async (req, res) => {
    const mentores = await loadMentores()
    
    const newMentor = req.body
    const mentorName = req.params.name
    
    if(isValidMentor(newMentor)) {
        res.statusCode = 400
        res.end('NAH AH, AGREGA UN TICHER VALIDO... バカ')
        
        return
    }
    
    const mentorIndex = mentores.findIndex(mentor => mentor.name === mentorName)
    
    if(MentorIndex === -1) {
        res.statusCode = 404
        res.end('aqui no hay nada bruh')
    }
    
    mentores[mentorIndex].nombre = newMentor.nombre
    mentores[mentorIndex].genero = newMentor.genero
    
    await saveMentores(mentores)
    
    res.json(newMentor)
})



//HELPER FUNCTIONS
//-------FUNCION CARGAR KODERS----------------------------
async function loadMentores() {
    try{
        const content = await fs.readFile(MENTORES_FILE, newContent, ENCODING)
        const parseFile = JSON.parse(content) 
        
        return parsedFile.mentores
    }catch (error) {
        console.error('NO SE CARGÓ NADA DUUUDE! D:')
        console.error(error)
        
        return []
    }
}

//-------FUNCION PARA GUARDAR KODERS----------------------------
async function saveMentores(mentores) {
    try{
        const mentores = await loadMentores()
        const newObject = {mentores, mentores: [] }
        const newContent = JSON.stringify(newObject, null, 4)
        
        await fs.writeFile(MENTORES_FILE, newContent, ENCODING)
    }catch (error) {
        console.error('NO SE GUARDOO NADA, DUUUUDE! D:')
        console.error(error)
        
        return []
    }
}

module.exports = router