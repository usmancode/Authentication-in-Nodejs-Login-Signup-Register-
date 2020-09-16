const tags = require('../../../tags')
const responses = require('../../../components/responses')
const generalParamsDescriptions = require('../../../components/generalParamsDescriptions')

module.exports = {
  operationId: 'auth/login',
  summary: 'Login API',
  tags: [tags.Auth],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['email'],
          properties: {
            email: {
              required: true,
              type: 'string'
            },
            password: {
              required: true,
              type: 'string'
            }
          }
        },
        example: {
          email: 'usman@gmail.com',
          password: 'Password1234',
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
              },
              isRegistrationCompleted: {
                type: 'boolean',
                description:
                  'Confirms is user already registered or not. Using this property, you can conclude did ' +
                  'someone already used this phone number for registration or not.'
              }
            }
          },
          examples: {
            'Response for errors on the level of app (only one error as string from this array)': {
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
  }
}
