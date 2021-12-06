import post from './post'

export default function updateProject(body) {
  return post({ url: 'projects', body }).catch(error => {
    throw new Error(`Couldn't update project\n${error}`)
  })
}
