const tags = require('../../../tags')
const responses = require('../../../components/responses')

module.exports = {
  summary: 'Update the template',
  tags: [tags.Regions],
  parameters: [
    {
      name: 'templateId',
      in: 'path',
      required: true,
      type: 'string',
      format: 'uuid'
    }
  ],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['id'],
          properties: {
            id: {
              required: true,
              type: 'string'
            },
            type: {
              required: true,
              type: 'string'
            },
            file: {
              required: true,
              type: 'object'
            }
          },
          example: {
            type: 'REGISTRATION',
            file: {
              subject: 'Welcome',
              body: '<h3>Hello <b>{{name}},<b><br>Welcome to Zendy</h3>'
            }
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
            $ref: '#/components/schemas/template'
          },
          examples: {
            'Response for successful request': {
              value: {
                status: true,
                error: '',
                data: {
                  id: 'b20f6a9c-b24f-4300-bc5d-a09ad47ac6e8',
                  type: 'REGISTRATION',
                  file: {
                    subject: 'Welcome',
                    body: '<h3>Hello <b>{{name}},<b><br>Welcome to Zendy</h3>'
                  },
                  createdAt: '2020-01-19T11:12:39.129Z',
                  updatedAt: '2020-01-19T11:13:41.473Z',
                  regionId: '227b6b94-1c1d-4a3e-ae6a-3f95b33d4559'
                }
              }
            },
            'Response for failed data retrieval': {
              value: {
                status: false,
                error: 'ERR_TEMPLATE_UPDATE_FAILED'
              }
            }
          }
        }
      }
    },
    400: {
      $ref: '#/components/responses/400'
    },
    401: {
      $ref: '#/components/responses/401'
    }
  }
}
