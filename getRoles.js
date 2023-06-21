const get = require('./get.js')

module.exports = function getRoles(parameters) {
  let url = 'roles'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get roles \n${error}`)
  })
}
