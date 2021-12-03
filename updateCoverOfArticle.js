/* Copyright 2021 Polyblog */
import put from './put'

export default function updateCoverOfArticle(articleId, file) {
  return put({ url: 'articles/' + articleId + '/cover', body: [file] }).catch(
    error => {
      throw new Error(`Couldn't update cover of article\n${error}`)
    },
  )
}
