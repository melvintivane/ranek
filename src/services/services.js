import axios from 'axios'

export const api = {
  get(url) {
    return axios.get(url)
  },
}
