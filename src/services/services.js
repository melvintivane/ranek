import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
})

export const api = {
  get(url) {
    return axiosInstance.get(url)
  },
  post(url, body) {
    return axiosInstance.post(url, body)
  },
}
