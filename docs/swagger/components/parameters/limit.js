module.exports = {
  name: 'limit',
  description:
    'Pagination: The maximum number of results to return in this set.',
  in: 'query',
  required: false,
  schema: {
    type: 'integer',
    default: 20
  }
}
