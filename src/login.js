import { btoa } from 'b64-lite'
import post from './post'

export default function login(email, password) {
  const headers = {
    Authorization: `Basic ${btoa(email + ':' + password)}`,
  }

  return post({ url: 'login', headers })
}
