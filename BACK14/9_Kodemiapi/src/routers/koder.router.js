const express = require('express')
const controller = require('../controllers/koder.controller')

const router = express.Router()

router.get('/', controller.getKoder)
router.post('/', controller.saveKoder)
router.delete('/:id', controller.deleteKoder)

module.exports = router