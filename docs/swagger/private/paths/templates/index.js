// Import routes
const GetTemplates = require('./GetTemplates')
const GetTemplate = require('./GetTemplate')
const createTemplate = require('./Create')
const updateTemplate = require('./Update')
const deleteTemplate = require('./Delete')

module.exports = {
  '/regions/{regionId}/templates': {
    get: GetTemplates,
    post: createTemplate
  },
  '/regions/templates/{templateId}': {
    get: GetTemplate,
    put: updateTemplate,
    delete: deleteTemplate
  }
}
