import get from './get'

export default function getFreelancerProjects() {
  let url = 'freelancercom/projects'

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get freelancer.com projects\n${error}`)
  })
}
