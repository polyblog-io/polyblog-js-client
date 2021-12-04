/* Copyright 2013 - 2021 Waiterio LLC */
import get from './get'

export default function getFreelancerMilestones(projectId) {
  let url = `freelancercom/projects/${projectId}/milestones/`

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get freelancer.com milestones \n${error}`)
  })
}
