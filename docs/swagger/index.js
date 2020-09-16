const express = require('express')

const privateDocs = require('./private')
const router = express.Router()

router.use('/', privateDocs)

module.exports = router
