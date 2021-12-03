/* Copyright 2013 - 2021 Waiterio LLC */
import get from './get'

export default function getArticleById(articleId) {
  let url = `articles/${articleId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get article \n${error}`)
  })
}
