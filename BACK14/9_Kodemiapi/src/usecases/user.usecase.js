const User = require('../models/user.model')
const {hash} = require('../lib/bcrypt')

function getAll() {
    return User.find()
}

//sign up o regristro
async function createUser({user, email, password}) {
    const encryptedPassword = await hash(password)

    return User.create({
        user, 
        email, 
        password: encryptedPassword,
    })
}

module.exports = {
    getAll,
    createUser,
}