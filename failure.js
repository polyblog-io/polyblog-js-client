/* Copyright 2021 Polyblog */
import ClientError from './ClientError'

export default function failure(response) {
  throw new ClientError(response)
}
