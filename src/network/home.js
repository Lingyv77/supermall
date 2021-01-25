import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// const {proxy} = require('./proxy');

// export function getHomeGoods(page) {
//   proxy.setProxy(page)
// }
