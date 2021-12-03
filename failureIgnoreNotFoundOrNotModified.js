/* Copyright 2013 - 2021 Waiterio LLC */
import failure from './failure'

export default function failureIgnoreNotFoundOrNotModified(error) {
  if (error && error.status !== 404 && error.status !== 304) {
    return failure(error)
  }

  return error
}
