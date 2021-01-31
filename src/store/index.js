import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//2.安装插件
Vue.use(Vuex);

//2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters
})

//3.挂在Vue实例上
export default store