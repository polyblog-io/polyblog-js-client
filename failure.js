const ClientError = require('./ClientError.js')

module.exports = function failure(response) {
  throw new ClientError(response)
}
