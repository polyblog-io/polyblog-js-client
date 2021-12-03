/* Copyright 2021 Polyblog */
import http from './http'
import failureIgnoreNotFoundOrNotModified from './failureIgnoreNotFoundOrNotModified'

export default function (config, customFailure) {
  config.method = 'DELETE'

  if (!customFailure) {
    customFailure = failureIgnoreNotFoundOrNotModified
  }

  return http(config, customFailure)
}
