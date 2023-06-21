const post = require('./post.js')

module.exports = function addOrUpdateArticle(article) {
  return post({ url: 'articles', body: article }).catch(error => {
    throw new Error(`Couldn't add or update article\n${error}`)
  })
}
