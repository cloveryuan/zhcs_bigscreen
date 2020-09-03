/**
 * 基于axios 封装的请求模块
 */
import axios from 'axios'
const baseUrl = ''
const request = axios.create({
  baseURL: baseUrl
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use((config) => {
  // 不同于客户端，这里面拿不到store中数据，所以要有插件重新写axios，不用这个文件的了，重写在plugins文件中
  // if (store.state.user) {
  //   config.headers['Authentication'] = 'Token '+store.state.user.token  // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, function(error) {
  return Promise.reject(error)
})

// 响应拦截器
// Add a response interceptor
request.interceptors.response.use((response) => {
  return response
}, function(error) {
  return Promise.reject(error)
})

export default request
