import ClientError from './ClientError'

export default function failure(response) {
  throw new ClientError(response)
}
