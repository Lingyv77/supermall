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
      port: 8080, // 自定义修改8080端口
    }
  }
}