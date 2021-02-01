import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLzayLoad from 'vue-lazyload'

Vue.config.productionTip = false

//自定义原型$bus属性 对应Vue对象实例 (便于其他发送组件 根Vue使用)
Vue.prototype.$bus = new Vue(); 

//安装自定义组件全局 (吐司)
Vue.use(toast);

//解决移动端300ms延迟
FastClick.attach(document.body);

//使用懒加载的插件
Vue.use(VueLzayLoad, {
  loading: require('./assets/img/common/loading.gif'),
  error: require('./assets/img/common/loading_failed.png')
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

