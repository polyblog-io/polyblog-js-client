const get = require('./get.js')

module.exports = function getArticleBySlugAndByLocale(slug, locale) {
  let url = `articles/${slug}?locale=${locale}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get article \n${error}`)
  })
}
