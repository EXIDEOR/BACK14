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

module.exports = {
    getKoder,
    //postKoder,
    //deleteKoder
}