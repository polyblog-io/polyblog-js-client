const post = require('./post.js')

module.exports = function updateBlog(body) {
  return post({ url: 'blogs', body }).catch(error => {
    throw new Error(`Couldn't update blog\n${error}`)
  })
}
