/* Copyright 2013 - 2021 Waiterio LLC */
import get from './get'

export default function getUser(userId) {
  let url = `users/${userId}`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get user \n${error}`)
  })
}
