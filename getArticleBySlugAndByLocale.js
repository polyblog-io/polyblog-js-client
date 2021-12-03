/* Copyright 2021 Polyblog */
import get from './get'

export default function getArticleBySlugAndByLocale(slug, locale) {
  let url = `articles/${slug}?locale=${locale}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get article \n${error}`)
  })
}
