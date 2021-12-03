/* Copyright 2021 Polyblog */
import get from './get'

export default function getArticlesFromCDN(parameters) {
  let url = 'articles/cdn'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get articles \n${error}`)
  })
}
