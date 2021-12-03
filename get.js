/* Copyright 2021 Polyblog */
import http from './http'

export default function get(config, customFailure) {
  config.method = 'GET'
  return http(config, customFailure)
}
