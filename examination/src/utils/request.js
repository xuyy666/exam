import axios from 'axios'

import {getToken} from '../utils/index.js'

// create an axios instance
const service = axios.create({  // 前端的接口
  // baseURL:'http://169.254.12.254:7001/',
  // baseURL:'http://169.254.12.22:7001/',
  baseURL:'https://exam.jasonandjay.com',

  // baseURL:/https:\/\/jasonandjay.com/.test(window.location.origin) ? 'https://exam.jasonandjay.com/':'http://169.254.12.22:7001/',

  // baseURL:'http://192.168.43.175:7001/',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service
