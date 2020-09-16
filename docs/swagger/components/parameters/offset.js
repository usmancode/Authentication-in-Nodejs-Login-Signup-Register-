module.exports = {
  name: 'offset',
  description: 'Pagination: The number of results to skip for this result set.',
  in: 'query',
  required: false,
  schema: {
    type: 'integer',
    default: '0'
  }
}
