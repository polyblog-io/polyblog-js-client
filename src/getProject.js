import get from './get'

export default function getProject(projectIdOrName, organizationId) {
  let url = `projects/${projectIdOrName}`

  if (organizationId) {
    url += `?organizationId=${organizationId}`
  }

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get project ${projectIdOrName} \n${error}`)
  })
}
