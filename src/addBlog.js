import post from './post'

export default function addBlog(body) {
  return post({ url: 'blogs', body }).catch(error => {
    throw new Error(`Couldn't add blog\n${error}`)
  })
}
