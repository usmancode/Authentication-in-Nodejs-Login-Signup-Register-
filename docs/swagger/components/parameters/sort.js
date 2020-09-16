module.exports = {
  name: 'sort',
  description: 'Sort object which will contain properties for sorting.',
  in: 'query',
  required: false,
  schema: {
    type: 'object',
    properties: {
      field: {
        title: 'field which we are going to use for sorting',
        type: 'string'
      },
      order: {
        title: 'direction of sort, ASC or DESC',
        type: 'string'
      }
    }
  }
}
