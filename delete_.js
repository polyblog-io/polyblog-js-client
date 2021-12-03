/* Copyright 2013 - 2021 Waiterio LLC */
import http from './http'
import failureIgnoreNotFoundOrNotModified from './failureIgnoreNotFoundOrNotModified'

export default function (config, customFailure) {
  config.method = 'DELETE'

  if (!customFailure) {
    customFailure = failureIgnoreNotFoundOrNotModified
  }

  return http(config, customFailure)
}
