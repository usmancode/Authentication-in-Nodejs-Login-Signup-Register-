const tags = require('../../../tags')
const responses = require('../../../components/responses')

module.exports = {
  summary: 'Get single template details',
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
                  id: 'e61be627-fdb9-4691-9be3-c8e9acbdfece',
                  type: 'REGISTRATION',
                  file: {
                    subject: 'Welcome',
                    body: '<h3>Hello <b>{{name}},<b><br>Welcome to Zendy</h3>'
                  },
                  updatedAt: '2020-01-14T13:56:32.417Z',
                  createdAt: '2020-01-14T13:56:32.417Z',
                  regionId: '227b6b94-1c1d-4a3e-ae6a-3f95b33d4559'
                }
              }
            },
            'Response for failed data retrieval': {
              value: {
                status: false,
                error: 'ERR_TEMPLATE_GET_FAILED'
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
