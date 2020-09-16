const login = require('./Login')
const register = require('./Register')
const logout = require('./Logout')


module.exports = {
  '/auth/login': {
    post: login
  },
  '/auth/register': {
    post: register
  },
  '/auth/logout': {
    get: logout
  }
}
