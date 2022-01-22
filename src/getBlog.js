import get from './get'

export default function getBlog(blogIdOrName, organizationId) {
  let url = `blogs/${blogIdOrName}`

  if (organizationId) {
    url += `?organizationId=${organizationId}`
  }

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get blog ${blogIdOrName} \n${error}`)
  })
}
