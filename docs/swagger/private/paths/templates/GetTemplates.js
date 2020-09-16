const tags = require('../../../tags')
const responses = require('../../../components/responses')

module.exports = {
  operationId: 'getTemplates',
  summary: 'Returns all Template.',
  tags: [tags.Regions],
  parameters: [
    {
      name: 'regionId',
      in: 'path',
      required: true,
      type: 'string',
      format: 'uuid'
    },
    {
      $ref: '#/components/parameters/limit'
    },
    {
      $ref: '#/components/parameters/offset'
    },
    {
      $ref: '#/components/parameters/filter'
    },
    {
      $ref: '#/components/parameters/sort'
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
                  items: [
                    {
                      id: 'a3dda13f-6922-4ef8-9df7-88797cee9e83',
                      type: 'REGISTRATION',
                      file: {
                        subject: 'Verify your email - Zendy',
                        body:
                          '<p><strong>Hello {{name}},</strong><br /><br /></p> <h1>Welcome to Zendy (Global Research)</h1> <p>Explore tens of thousands of scientific publications or tune into latest scholarly findings.<br />Suited for all academic and non-academic professionals, students, and knowledge enthusiasts!<br />Write research papers, form evidence-based action plans, or catch up on your interests.<br /><br />Zendy is currently live in Jordan and next up is Africa with more countries to come so stay tuned!</p> <p>&nbsp;</p> <p>Click here to verify your email address:&nbsp;<a class="hero-action-button" title="Verify your email" href="https://mailchi.mp/zendy.io/register" target="_blank" rel="noopener">Verify your email</a></p>'
                      },
                      createdAt: '2020-01-19T09:33:03.187Z',
                      updatedAt: '2020-01-19T10:16:10.144Z',
                      regionId: '227b6b94-1c1d-4a3e-ae6a-3f95b33d4559'
                    }
                  ],
                  total: 1
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
