import get from './get'

export default function getFreelancerProjectsByBidders(bidders) {
  let url = 'freelancercom/projects'

  url +=
    '?' +
    new URLSearchParams({
      bidders,
    }).toString()

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get freelancer.com projects\n${error}`)
  })
}
