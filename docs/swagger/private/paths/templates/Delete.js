const Tags = require('../../../tags')
const responses = require('../../../components/responses')

module.exports = {
  operationId: 'removeTemplate',
  summary: 'Removes an existing template.',
  tags: [Tags.Regions],
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
          ...responses['200'].standardJsonResponseSchema,
          examples: {
            'Response for successful template removal': {
              value: {
                status: true,
                error: ''
              }
            },
            'Response for failed removal': {
              value: {
                status: false,
                error: 'ERR_TEMPLATE_DELETE_FAILED'
              }
            }
          }
        }
      }
    },
    400: {
      $ref: '#/components/responses/400'
    },
    403: {
      $ref: '#/components/responses/403'
    }
  }
}
