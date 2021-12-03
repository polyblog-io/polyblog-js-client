/* Copyright 2021 Polyblog */
import post from './post'

export default function addContact(body) {
  return post({ url: 'contacts', body }).catch(error => {
    throw new Error(`Couldn't add contact\n${error}`)
  })
}
