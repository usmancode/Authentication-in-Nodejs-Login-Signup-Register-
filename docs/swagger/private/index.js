const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const performNext = require('../helpers')
// components
const components = require('../components')
// paths
const paths = require('./paths')

const router = express.Router()

// Handle requests for preview envs
const basePath = '/'

// Swagger UI Options
const createSwaggerDefinition = () => ({
  info: {
    // API information (required)
    title: 'API Documentation', 
    version: 'v1',
    description: 'Interactive documentation for the API.'
  },
  host: 'localhost:5055',
  schemes: [
    'http'
  ],
  servers: [
    {
      url: `${basePath}`
    }
  ],
  openapi:'3.0.0',
  produces: ['application/json'],
  consumes: ['application/json'],
  components: components(),
  paths
 })

const createSwaggerUIOptions = () => ({
  explorer: false,
  showMutatedRequest: true
})

const createSwaggerJSDoc = () => {
  return swaggerJSDoc({
    swaggerDefinition: createSwaggerDefinition(),
    apis: []
  })
}

const serveFilesHandler = (req, res, next) => {
  const middlewares = swaggerUi.serveFiles(
    createSwaggerJSDoc(),
    createSwaggerUIOptions()
  )

  performNext(middlewares, req, res, next)()
}

router.use('/', serveFilesHandler)

const generateHTMLHandler = (req, res) => {
  res.send(
    swaggerUi.generateHTML(createSwaggerJSDoc(), createSwaggerUIOptions())
  )
}

router.get('/', generateHTMLHandler)

router.get('/openapi.json', (req, res) => res.send(createSwaggerDefinition()))

module.exports = router
