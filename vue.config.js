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
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'https://search-x.jd.com/Search?callback=jQuery5473245&area=21&enc=utf-8&keyword=%E6%9C%8D%E8%A3%85%E5%A5%B3%E6%BD%AE%E6%B5%81&adType=7&page=1&ad_ids=291%3A33&xtest=new_search&_=1611398589572',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}