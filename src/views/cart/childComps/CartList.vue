<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" 
            :probeType="3" 
            :pullUpLoad="true">
        <cart-list-item :productInfo="cartList"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'  
  import CartListItem from './CartListItem.vue'

  import {mapGetters} from 'vuex'

 
  export default {
    name: 'CartList',
    components: { 
      Scroll,
      CartListItem 
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh();
    },
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 49px - 44px - 40px);
    overflow: hidden;
    background-color: white;
  }
  .content {
    height: 100%;
    position: relative;
  }
</style>