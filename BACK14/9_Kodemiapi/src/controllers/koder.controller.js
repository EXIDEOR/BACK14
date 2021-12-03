const koder = require('../usecases/koder.usecase')

async function getKoder(request, response) {
    try {
        const allKoders = await koder.getAllKoders()

        response.json({
            succes: true,
            message: 'servido jovenazo, aqui están sus koders',
            data: {
                koders: allKoders,
            },
        })
    } catch (error) {
        console.error(error)
        response.statusCode = 500 
        response.json({
            succes: false,
            message: 'ijole joven. Aqui no hay Koders...',
            error,
        })
    }
}

async function saveKoder(request, response) {
    try {
        const newKoder = request.body
        const savedKoder = await koder.createKoder(newKoder)

        response.json({
            succes: true,
            message: 'aqui viene otro koder nuevo',
            data: {
                koders: savedKoder,
            },
        })
    } catch (error) {
        console.error(error)

        response.statusCode = error.name === 'ValidationError' ? 400 : 500 
        response.json({
            succes: false,
            message: 'ijole joven. Aqui no hay Koders...',
            error,
        })
    }

}

async function deleteKoder(request, response) {
    try {
        const id = request.params.id

        const deleteKoder = await koder.deleteKoderById(id)

        response.json({
            succes: true,
            message: 'aqui no hay nada, uschcale a otro lado!',
            data: {
                koder: deleteKoder,
            },
        })
    } catch (error) {
        console.error(error)
        response.statusCode = error.message === 'Invalid ID' ? 400 : 500 
        response.json({
            succes: false,
            message: 'tencontre compa, ten con treeee -.-',
            error,
        })
    }
}

module.exports = {
    getKoder,
    saveKoder,
    deleteKoder
    //deleteKoder
}