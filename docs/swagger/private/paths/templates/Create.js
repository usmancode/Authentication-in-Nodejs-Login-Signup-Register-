const tags = require('../../../tags')
const responses = require('../../../components/responses')

module.exports = {
  operationId: 'createTemplate',
  summary: 'Create Template',
  tags: [tags.Regions],
  parameters: [
    {
      $ref: '#/components/parameters/regionId'
    }
  ],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/template'
        },
        example: {
          type: 'REGISTRATION',
          file: {
            subject: 'Welcome',
            body: '<h3>Hello <b>{{name}},<b><br>Welcome</h3>'
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
                  type: 'REGISTRATION1',
                  file: {
                    subject: 'Welcome',
                    body: '<h3>Hello <b>{{name}},<b><br>Welcome</h3>'
                  },
                  regionId: '227b6b94-1c1d-4a3e-ae6a-3f95b33d4559',
                  updatedAt: '2020-01-19T11:12:39.129Z',
                  createdAt: '2020-01-19T11:12:39.129Z'
                }
              }
            },
            'Response for failed data retrieval': {
              value: {
                status: false,
                error: 'ERR_TEMPLATE_CREATE_FAILED'
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
