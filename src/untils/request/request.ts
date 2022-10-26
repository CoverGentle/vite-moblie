import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000
})

// 请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = token
    }
    return config
  },
  error => {

    return Promise.reject(error)

  }
)

// 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      console.log('网络通畅');
    } else {
      console.log('网络开小差了');
    }
    return response.data
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default instance
