/* Copyright 2021 Polyblog */
import get from './get'

export default function getProjects() {
  let url = 'projects'

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get projects \n${error}`)
  })
}
