module.exports = {
  name: 'filter',
  description:
    'Filter object, which will contain data based on which we will filter. ' +
    'Parameters of object are going to be keys based on which we are filtering',
  in: 'query',
  required: false,
  schema: {
    type: 'object'
  }
}
