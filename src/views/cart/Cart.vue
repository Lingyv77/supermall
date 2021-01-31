<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  
  import {mapGetters} from 'vuex' //vux方法getters 与 computed 解构
  
  export default {
    name: 'Cart',
    components: { 
      NavBar,
      CartList
    },
    computed: {
      //第一种写法 默认变量为value com
      // ...mapGetters(['cartLength','cartList']) //  将getters的计算属性转为computed的计算属性
      //第二种写法 可通过解构来自定义变量
      ...mapGetters({ 
        length: 'cartLength',
        cart: 'cartList'
      })
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }
  .cart-nav {
    background-color: rgb(91, 148, 91);
    color: white;
    font-weight: 700;
    display: flex;
  }
</style>