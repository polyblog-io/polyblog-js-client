import get from './get'

export default function getArticles(parameters) {
  let url = 'articles'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get articles \n${error}`)
  })
}
