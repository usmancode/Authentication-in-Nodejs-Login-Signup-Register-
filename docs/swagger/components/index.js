const parameters = require('./parameters')
const responses = require('./responses')

module.exports = function() {
  return {
    securitySchemes: {
      authentication: {
        description: "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
   },
    parameters: parameters(),
    responses
  }
}

