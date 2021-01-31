import Vue from 'vue'
import Vuex from 'vuex'

//2.安装插件
Vue.use(Vuex);

//2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state,payload) {
      //payload型添加的商品
      var isIidMatchs = false;
      state.cartList.map(item => {
        if(item.iid === payload.iid) {
          isIidMatchs = true;
          item.count += 1;
        } 
      })

      if (!isIidMatchs) 
        state.cartList.push(payload);
    }
  }
})

//3.挂在Vue实例上
export default store