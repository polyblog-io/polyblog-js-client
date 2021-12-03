/* Copyright 2021 Polyblog */
import get from './get'

export default function getTranslators(parameters) {
  let url = 'translators'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get translators \n${error}`)
  })
}
