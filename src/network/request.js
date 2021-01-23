import axios from 'axios'

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

axios({
  url: "http://123.207.32.32:8000/?data=%7B%22appPlat%22%3A%22m%22%2C%22pids%22%3A%22126988%2C126991%2C126994%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1611408041466&mw-uuid=95ce4a2f-0ea5-40cb-beee-159564af73ed&mw-h5-os=iOS&mw-sign=5f4bd3f566881078dea964168fc7c24a&callback=mwpCb1&_=1611408041467",
  withCredentials: true
}).then(console.log)

// export function tianmao(config) {
//   //1.创建axios实例
//   const instance2 = axios.create({
//     timeout: 5000
//   })

//   //2.aixos拦截器
//   instance2.interceptors.request.use(config => {
//     return config;
//   }, error => {
//     return Promise.reject(error);
//   });

//   //3.响应拦截
//   instance2.interceptors.response.use(res => {
//     return res['291'];
//   }, error => {
//     return Promise.reject(error)
//   })

//   //4.发送请求
//   return instance2(config)
// }