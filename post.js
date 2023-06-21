const http = require('./http.js')

module.exports = function post(config, customFailure) {
  config.method = 'POST'
  return http(config, customFailure)
}
