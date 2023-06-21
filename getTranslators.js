const get = require('./get.js')

module.exports = function getTranslators(parameters) {
  let url = 'translators'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get translators \n${error}`)
  })
}
