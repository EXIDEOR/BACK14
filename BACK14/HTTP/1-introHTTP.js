const http = require('http')

const port = 8080

//creamos un servidor, usando createServer
const server = http.createServer((request, response) => {
    const metodo = request.method
    console.log(`Metodo: ${metodo}`)

    const url = request.url
    console.log(`URL: ${url}`)

    //definimos todo el header, con writehead
    //response.writeHead(200, {})
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')

    if(metodo === 'GET' && url === '/koders'){
        response.end('aqui estan: todos los koders')
        console.log("aqui estan: todos los koders")

    }else if(metodo === 'POST' && url === '/koders'){
        response.end('aqui puedes crear: koders')
        console.log("aqui puedes crear: koders")

    }else {
        response.end('ooops...JELP')
        console.log("ooops...JELP")
    }

})
//arrancar servidor
server.listen(port, () => {
    console.log(`el servidor arrancó port ${port}`)
})