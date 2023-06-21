const http = require('./http.js')

module.exports = function get(config, customFailure) {
  config.method = 'GET'
  return http(config, customFailure)
}
