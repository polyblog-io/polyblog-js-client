const get = require('./get.js')

module.exports = function getBlogs() {
  let url = 'blogs'

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get blogs \n${error}`)
  })
}
