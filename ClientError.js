function ClientError(source) {
  if (source && typeof source === 'object') {
    Object.keys(source).forEach(key => {
      this[key] = source[key]
    })

    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.message = 'No Internet connection'
    } else if (source.message === 'Failed to fetch') {
      this.message = 'A network error occurred'
    } else if (source.message) {
      this.message = source.message
    } else {
      if (source.status) {
        this.message += source.status

        if (source.body) {
          this.message += ' '
        }
      }

      if (source.body) {
        if (typeof source.body === 'object') {
          if (source.body.string) {
            this.message += source.body.string
          } else {
            this.message += JSON.stringify(source.body)
          }
        } else {
          this.message += source.body
        }
      }
    }
  } else if (source && typeof source === 'string') {
    this.message = source
  } else {
    this.message = ''
  }

  this.name = 'ClientError'
}

// TODO commented out because it crashes gatsby source plugin
// ClientError.prototype = Error.prototype
ClientError.prototype.toString = function () {
  return this.message
}

module.exports = ClientError
