import http from './http'

export default function get(config, customFailure) {
  config.method = 'GET'
  return http(config, customFailure)
}
