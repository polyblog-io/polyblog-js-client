const post = require('./post.js')

module.exports = function addBlog(body) {
  return post({ url: 'blogs', body }).catch(error => {
    throw new Error(`Couldn't add blog\n${error}`)
  })
}
