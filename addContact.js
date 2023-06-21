const post = require('./post.js')

module.exports = function addContact(body) {
  return post({ url: 'contacts', body }).catch(error => {
    throw new Error(`Couldn't add contact\n${error}`)
  })
}
