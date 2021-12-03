/* Copyright 2021 Polyblog */
import get from './get'

export default function getArticleById(articleId) {
  let url = `articles/${articleId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get article \n${error}`)
  })
}
