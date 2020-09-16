const generalParamsDescriptions = require('../generalParamsDescriptions')

module.exports = {
  200: {
    description:
      'OK - The request has succeeded. The client can read the result of the request in the body and the headers of the response.',
    standardJsonResponseSchema: {
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'boolean',
            description: generalParamsDescriptions.status
          },
          error: {
            type: 'string',
            description: generalParamsDescriptions.error
          }
        }
      }
    }
  },
  201: {
    description:
      'Created - The request has been fulfilled and resulted in a new resource being created.'
  },
  400: {
    description:
      'Bad Request - The request could not be understood by the server due to malformed syntax. The message body will contain more information.'
  },
  401: {
    description:
      'Unauthorized - The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials.'
  },
  403: {
    description:
      'Forbidden - The server understood the request, but is refusing to fulfill it. The user might not have the necessary permissions for a resource, or may need an account of some sort.'
  },
  404: {
    description: 'Not Found - The requested resource could not be found.'
  },
  409: {
    description:
      'Conflict - The request could not be processed because of conflict in the current state of the resource.'
  },
  502: {
    description:
      'Bad Gateway - The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
  }
}
