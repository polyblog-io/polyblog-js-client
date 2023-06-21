const get = require('./get.js')

module.exports = function getTranslator(translatorId) {
  let url = `translators/${translatorId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get translator \n${error}`)
  })
}
