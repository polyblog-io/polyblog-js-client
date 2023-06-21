const failure = require('./failure.js')

module.exports = function failureIgnoreNotFoundOrNotModified(error) {
  if (error && error.status !== 404 && error.status !== 304) {
    return failure(error)
  }

  return error
}
