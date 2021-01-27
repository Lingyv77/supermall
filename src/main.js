import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue(); //自定义原型$bus属性 对应Vue对象实例 (便于其他发送组件 根Vue使用)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

