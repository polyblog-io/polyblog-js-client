const post = require('./post.js')

module.exports = function updateTranslator(body) {
  return post({ url: 'translators', body }).catch(error => {
    throw new Error(`Couldn't update translator\n${error}`)
  })
}
