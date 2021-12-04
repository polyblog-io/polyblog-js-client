/* Copyright 2013 - 2021 Waiterio LLC */
import http from './http'

export default function post(config, customFailure) {
  config.method = 'POST'
  return http(config, customFailure)
}
