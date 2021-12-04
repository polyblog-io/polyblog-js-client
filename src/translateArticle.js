/* Copyright 2013 - 2021 Waiterio LLC */
import post from './post'

export default function translateArticle(slug, locale) {
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
