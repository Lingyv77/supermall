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

axios.get("/").then(console.log)

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