const next = require('./next')
const limit = require('./limit')
const filter = require('./filter')
const sort = require('./sort')
const offset = require('./offset')

module.exports = function(...args) {
  return {
    next,
    limit,
    offset,
    filter,
    sort
  }
}
