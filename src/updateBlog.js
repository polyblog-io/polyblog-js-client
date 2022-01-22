import post from './post'

export default function updateBlog(body) {
  return post({ url: 'blogs', body }).catch(error => {
    throw new Error(`Couldn't update blog\n${error}`)
  })
}
