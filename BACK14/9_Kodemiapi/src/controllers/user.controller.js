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