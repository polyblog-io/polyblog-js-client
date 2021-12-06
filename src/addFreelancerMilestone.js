import post from './post'

export default function addFreelancerMilestone({
  amount,
  bidderId,
  description,
  projectId,
}) {
  let url = `freelancercom/projects/${projectId}/milestones/`

  url +=
    '?' +
    new URLSearchParams({
      amount,
      bidderId,
      description,
    }).toString()

  return post({ url }).catch(error => {
    throw new Error(`Couldn't add freelancer.com milestone \n${error}`)
  })
}
