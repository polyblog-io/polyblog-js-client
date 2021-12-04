/* Copyright 2013 - 2021 Waiterio LLC */
import get from './get'

export default function getArticlesFromCDN(parameters) {
  let url = 'articles/cdn'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get articles \n${error}`)
  })
}
