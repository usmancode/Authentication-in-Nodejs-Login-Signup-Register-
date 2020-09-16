const tags = require('../../../tags')
const responses = require('../../../components/responses')
const generalParamsDescriptions = require('../../../components/generalParamsDescriptions')

module.exports = {
  operationId: 'auth/register',
  summary:
    'User Signup',
  tags: [tags.Auth],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['email'],
          properties: {
            name: {
              required: true,
              type: 'string'
            },
            password: {
              required: true,
              type: 'string'
            },
            email: {
              required: true,
              type: 'string'
            },
            role: {
              required: true,
              type: 'string'
            }
            
          },
          example: {
            name: 'Usman',
            password: 'Password1234',
            email: 'usman@gmail.com',
            role:'Admin'
            
          }
        }
      }
    }
  },
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
            'Response for properly validated phone number': {
              value: {
                status: true,
                error: ''
              }
            },
            'Response for validation fail - errors on the level of app (only one error as string from this array)': {
              value: {
                status: false,
                error: ['']
              }
            }
          }
        }
      },
      $ref: ''
    },
    400: {
      $ref: '#/components/responses/400'
    }
  },
  security: [
    {
       authentication: []
    }
  ]
}
