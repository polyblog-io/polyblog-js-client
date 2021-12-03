/* Copyright 2021 Polyblog */
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
