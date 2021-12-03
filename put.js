/* Copyright 2021 Polyblog */
import http from './http'

export default function put(config, customFailure) {
  config.method = 'PUT'
  return http(config, customFailure)
}
