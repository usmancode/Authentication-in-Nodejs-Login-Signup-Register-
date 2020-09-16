const tags = require('../../../tags')
const responses = require('../../../components/responses')
const generalParamsDescriptions = require('../../../components/generalParamsDescriptions')

module.exports = {
  operationId: 'auth/logout',
  summary:
    'Performs logout',
  tags: [tags.Auth],
  responses: {
    200: {
      description: responses['200'].description,
      content: {
        'application/json': {
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
          },
          examples: {
            'Response for successful logout (session is destroyed, do redirect on client side)': {
              value: {
                status: true,
                error: ''
              }
            },
            'Response for failed logout': {
              value: {
                status: false,
                error: 'AUTH_ERROR_LOGOUT_SESSION_DESTROY_FAILED'
              }
            }
          }
        }
      },
      $ref: ''
    },
    401: {
      $ref: '#/components/responses/401'
    }
  },
  security: [
    {
       authentication: []
    }
  ]
}
