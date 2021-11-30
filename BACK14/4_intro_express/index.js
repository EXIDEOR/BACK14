const express = require('express')
const router = require('./routers/koders')
const routerKoder = require('./routers/koders')
const routerMentores = require('./routers/mentores')
const PORT = 8080

const server = express() //tambien se le  conoce como app
//middleware para convertir request a json
server.use(express.json())//equivalente a un JSON.parse

server.use('/koders', routerKoder )
server.use('/mentores', routerMentores)
//RUTA DE END POINT EN LA APLICACIO´N EXPRESS

server.listen(PORT, () => {
    console.log(`API KODERS ANDANDING http://localhost:${PORT}`)
})
// R E V I S A R  C L A S E  https://kodemia.mx/clase?id=647157228&title=javascript-14-18%2F11%2F2021&isVimeo=true