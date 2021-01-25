const proxy = {}

for(var i = 1; i <= 100; i++) {
  Object.defineProperties(proxy, {
    ["/pop" + i]: {
      data: `https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page=${i}&q=%25E6%25B5%2581%25E8%25A1%258C&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32.rPCjb.0.0.ftGyFhWZ&_=1611466992608&callback=jsonp1`,
      enumerable: true,
      configurable: false,
      writable: true
    },
    ["/news" + i]: {
      data: `https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page=${i}&q=%25E6%25B5%2581%25E8%25A1%258C&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32.rPCjb.0.0.ftGyFhWZ&_=1611466992608&callback=jsonp1`,
      enumerable: true,
      configurable: false,
      writable: true
    }
    ,
    ["/sell" + i]: {
      data: `https://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=pop&page=${i}&q=%25E6%25B5%2581%25E8%25A1%258C&minPrice=&maxPrice=&ppath=&cpc_offset=&ptp=32.rPCjb.0.0.ftGyFhWZ&_=1611466992608&callback=jsonp1`,
      enumerable: true,
      configurable: false,
      writable: true
    }
  })
}

module.exports.proxy = proxy;