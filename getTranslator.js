/* Copyright 2013 - 2021 Waiterio LLC */
import get from './get'

export default function getTranslator(translatorId) {
  let url = `translators/${translatorId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get translator \n${error}`)
  })
}
