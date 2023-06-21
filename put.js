const http = require('./http.js')

module.exports = function put(config, customFailure) {
  config.method = 'PUT'
  return http(config, customFailure)
}
