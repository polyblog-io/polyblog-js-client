import post from './post'

export default function addOrUpdateArticle(article) {
  return post({ url: 'articles', body: article }).catch(error => {
    throw new Error(`Couldn't add or update article\n${error}`)
  })
}
