import axios from 'axios'
import Vue from 'vue'

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = axios
// step3：使每次请求都会带一个 /api 前缀 
axios.defaults.baseURL = '/api'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //2.aixos拦截器
  instance.interceptors.request.use(config => {
    return config;
  },error => {
    return Promise.reject(error);
  });

  //3.响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  },error => {
    return Promise.reject(error)
  })

  //4.发送请求
  return instance(config)
}