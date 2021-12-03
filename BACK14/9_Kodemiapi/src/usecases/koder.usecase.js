const Koder = require('../models/koder.model')

async function getAllKoders() {
    return Koder.find()
}

function createKoder(Koder) {
    return Koder.create(Koder)
}

function deleteKoderById(id) {
    return Koder.findByIdAndDelete(id)
}

module.exports = {
    getAllKoders,
    createKoder,
    deleteKoderById

}