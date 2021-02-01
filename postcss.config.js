module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-viewport": {
      viewportWidth: 375, //视窗的宽度, 对应我们设计稿的宽度
      viewportHeight: 667, //视窗的高度, 对应的我们设计稿的高度.(也可以不配置)
      unitPrecision: 5, //指定 'px' 转换为视窗单位值的小数位
      viewportUnit: 'vw', //指定需要转换的视窗单位 建议使用vw
      selectorBlackList: ['exclued','ignore','tab-bar'], //指定忽略使用 class 类名的元素
      minPixeValue: 1, //小于或等于 '1px' 不转换
      mediaQuery: false, //准许媒体查询中转换 'px'
      exclude: ['TabBarItem.vue'] //(Array||Regexp)不包括
    }
  }
}