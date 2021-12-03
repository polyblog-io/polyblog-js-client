/* Copyright 2013 - 2021 Waiterio LLC */
import http from './http'

export default function put(config, customFailure) {
  config.method = 'PUT'
  return http(config, customFailure)
}
