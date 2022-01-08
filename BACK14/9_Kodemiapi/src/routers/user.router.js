const express = require('express')
const controller = require('../controllers/user.controller')

const router = express = express.Router()

router.post('/', controller.createUser)

module.exports = router