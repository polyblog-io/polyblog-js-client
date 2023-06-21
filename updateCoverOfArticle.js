const put = require('./put.js')

module.exports = function updateCoverOfArticle(articleId, file) {
  return put({ url: 'articles/' + articleId + '/cover', body: [file] }).catch(
    error => {
      throw new Error(`Couldn't update cover of article\n${error}`)
    },
  )
}
