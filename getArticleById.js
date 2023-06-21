const get = require('./get.js')

module.exports = function getArticleById(articleId) {
  let url = `articles/${articleId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get article \n${error}`)
  })
}
