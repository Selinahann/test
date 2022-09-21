import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeOUT: 5000
})

export default {
  ...service,
  get (url, data = {}) {
    return service.get(url, {
      params: data
    })
  }
}
