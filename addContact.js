/* Copyright 2013 - 2021 Waiterio LLC */
import post from './post'

export default function addContact(body) {
  return post({ url: 'contacts', body }).catch(error => {
    throw new Error(`Couldn't add contact\n${error}`)
  })
}
