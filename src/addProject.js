/* Copyright 2013 - 2021 Waiterio LLC */
import post from './post'

export default function addProject(body) {
  return post({ url: 'projects', body }).catch(error => {
    throw new Error(`Couldn't add project\n${error}`)
  })
}
