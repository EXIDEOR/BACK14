require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/lib/server')

dbConnect(process.env)
    .then(() => {
        console.log('DB Andanding_')

        server.listen(process.env.port, () => {
            console.log('Server Andanding_')
        })
    })
    .catch((error) => {
        console.error(error)
    })

