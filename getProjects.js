/* Copyright 2013 - 2021 Waiterio LLC */
import get from './get'

export default function getProjects() {
  let url = 'projects'

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get projects \n${error}`)
  })
}
