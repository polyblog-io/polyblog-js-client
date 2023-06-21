const get = require('./get.js')

module.exports = function getUser(userId) {
  let url = `users/${userId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get user \n${error}`)
  })
}
