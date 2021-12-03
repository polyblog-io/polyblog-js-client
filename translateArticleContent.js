/* Copyright 2013 - 2021 Waiterio LLC */
import post from './post'

export default function translateArticleContent(englishContent, locale) {
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
