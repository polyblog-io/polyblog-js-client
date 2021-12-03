/* Copyright 2021 Polyblog */
import get from './get'

export default function getFreelancerMilestones(projectId) {
  let url = `freelancercom/projects/${projectId}/milestones/`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get freelancer.com milestones \n${error}`)
  })
}
