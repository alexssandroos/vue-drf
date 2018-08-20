import http from './http'
import { then } from './helper'
import Service from './Service'

export default class Api extends Service {
  constructor (options, endpoint) {
    super(options)
    this.endpoint = endpoint + '/'
  }

  montaendpoint (resource) {
    const url = process.env.ROOT_API + this.endpoint + resource + '/'
    return url
  }

  read (resource) {
    if (resource) {
      return http.get(this.montaendpoint(resource))
        .then(then)
    } else {
      return http.get(this.endpoint)
        .then(then)
    }
  }

  create (resource) {
    return http.post(this.endpoint, resource)
      .then(then)
  }

  update (resource) {
    return http.put(this.endpoint, resource)
      .then(then)
  }

  delete (resource) {
    return http.delete(this.montaendpoint(resource))
      .then(then)
      .catch(
        e => console.log(e)
      )
  }
}
