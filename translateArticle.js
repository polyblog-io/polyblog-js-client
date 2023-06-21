const post = require('./post.js')

module.exports = function translateArticle(slug, locale) {
  return post({
    url: 'translate-article',
    body: {
      slug,
      locale,
    },
  }).catch(error => {
    throw new Error(`Couldn't translate article\n${error}`)
  })
}
