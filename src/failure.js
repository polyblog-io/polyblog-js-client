/* Copyright 2013 - 2021 Waiterio LLC */
import ClientError from './ClientError'

export default function failure(response) {
  throw new ClientError(response)
}
