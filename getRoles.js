/* Copyright 2021 Polyblog */
import get from './get'

export default function getRoles(parameters) {
  let url = 'roles'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get roles \n${error}`)
  })
}
