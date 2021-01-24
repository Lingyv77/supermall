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
    baseURL: 'http://123.207.32.32:8000',
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

export const proxy = {
  '/pop': {
    target: 'https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page=1&q=%25E6%25B5%2581%25E8%25A1%258C&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32.rPCjb.0.0.ftGyFhWZ&_=1611466992608&callback=jsonp1',
    changeOrigin: true
  },
  '/news': {
    target: 'https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page=1&q=%25E6%2596%25B0%25E6%25AC%25BE&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32.rPCjb.0.0.swNxxAw2&_=1611466621105&callback=jsonp1',
    changeOrigin: true
  },
  '/sell': {
    target: 'https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page=1&q=%25E7%25B2%25BE%25E9%2580%2589&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32.rPCjb.0.0.K87qd8LJ&_=1611466834251&callback=jsonp1',
    changeOrigin: true
  }
}