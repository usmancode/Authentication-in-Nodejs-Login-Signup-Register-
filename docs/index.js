const express = require('express')

const swagger = require('./swagger')

const router = express.Router()

// Swagger UI
router.use('/', swagger)

module.exports = router
