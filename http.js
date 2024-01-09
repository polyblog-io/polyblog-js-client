const failure = require('./failure.js')
const getPolyblogUrl = require('./getPolyblogUrl.js')
const httpWithoutHeaders = require('./httpWithoutHeaders.js')
const refreshAccessToken = require('./refreshAccessToken.js')

module.exports = async function http(config, customFailure) {
  let accessToken = await refreshAccessToken()

  if (!config.headers) {
    config.headers = {}
  }

  config.headers.Accept = config.headers.Accept || 'application/json'
  config.headers['Content-Type'] =
    config.headers['Content-Type'] || 'application/json'
  config.headers.Authorization =
    config.headers.Authorization || 'Token ' + btoa(accessToken || '')

  return fetch(getPolyblogUrl() + '/api/' + config.url, {
    method: config.method,
    headers: config.headers,
    body: JSON.stringify(config.body),
  })
    .then(response => {
      if (!response.ok) {
        if (response.url.startsWith('https://s3.amazonaws.com')) {
          return httpWithoutHeaders(response.url)
        } else {
          return response.json().then((error = {}) => {
            if (!error.status) {
              error.status = response.status
            }

            if (!error.message) {
              error.message = response.statusText
            }

            throw error
          })
        }
      } else {
        return response.json()
      }
    })
    .catch(customFailure || failure)
}
