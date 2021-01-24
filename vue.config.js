import {request,proxy} from 'network/request'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
    devServer: {
      open: false,
      port: 8801, // 自定义修改8080端口
      // 代理跨域
      proxy
    }
  }
}