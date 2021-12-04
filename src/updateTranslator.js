/* Copyright 2013 - 2021 Waiterio LLC */
import post from './post'

export default function updateTranslator(body) {
  return post({ url: 'translators', body }).catch(error => {
    throw new Error(`Couldn't update translator\n${error}`)
  })
}
