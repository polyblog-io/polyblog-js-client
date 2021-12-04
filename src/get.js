/* Copyright 2013 - 2021 Waiterio LLC */
import http from './http'

export default function get(config, customFailure) {
  config.method = 'GET'
  return http(config, customFailure)
}
