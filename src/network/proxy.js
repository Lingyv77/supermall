const proxy = {
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

module.exports.proxy = proxy;