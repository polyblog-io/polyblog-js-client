/* Copyright 2021 Polyblog */
import get from './get'

export default function getProjectFromCDN(projectIdOrName, organizationId) {
  let url = `projects/${projectIdOrName}/cdn`

  if (organizationId) {
    url += `?organizationId=${organizationId}`
  }

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get project ${projectIdOrName} \n${error}`)
  })
}
