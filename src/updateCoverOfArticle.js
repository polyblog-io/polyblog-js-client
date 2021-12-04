/* Copyright 2013 - 2021 Waiterio LLC */
import put from './put'

export default function updateCoverOfArticle(articleId, file) {
  return put({ url: 'articles/' + articleId + '/cover', body: [file] }).catch(
    error => {
      throw new Error(`Couldn't update cover of article\n${error}`)
    },
  )
}
