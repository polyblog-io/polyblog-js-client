/* Copyright 2021 Polyblog */
import failure from './failure'

export default function failureIgnoreNotFoundOrNotModified(error) {
  if (error && error.status !== 404 && error.status !== 304) {
    return failure(error)
  }

  return error
}
