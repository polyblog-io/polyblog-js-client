*const {
  getAccessToken,
  isAccessTokenExpired,
  setAccessToken,
} = require('./accessToken.js')
const {
  getRefreshToken,
  isRefreshTokenExpired,
  setRefreshToken,
} = require('./refreshToken.js')
const getPolyblogUrl = require('./getPolyblogUrl.js')

module.exports = async function refreshAccessToken() {
  let accessToken = getAccessToken()

  if (accessToken && isAccessTokenExpired()) {
    if (isRefreshTokenExpired()) {
      if (typeof window !== 'undefined') {
        window.open('/logout')
      }

      throw new Error('refresh token has expired')
    } else {
      let refreshToken = getRefreshToken()

      const url = getPolyblogUrl() + '/api/refresh-access-token'

      let result = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + btoa(refreshToken),
        },
      })
        .then(response => {
          if (!response.ok) {
            return response.json().then(error => {
              throw error
            })
          } else {
            return response.json()
          }
        })
        .catch(console.log)

      accessToken = result.accessToken
      refreshToken = result.refreshToken

      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
    }
  }

  return accessToken
}
