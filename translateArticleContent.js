const post = require('./post.js')

module.exports = function translateArticleContent(englishContent, locale) {
  return post({
    url: 'translate-article-content',
    body: {
      englishContent,
      locale,
    },
  }).catch(error => {
    throw new Error(`Couldn't translate article content \n${error}`)
  })
}
