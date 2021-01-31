<template>
  <div class="bottom-bar">
    <div class="item-info">
      <img src='~assets/img/detail/bottom-bar1.png' alt="">
      <p>客服</p>
    </div>
    <div class="item-info">
      <img src='~assets/img/detail/bottom-bar2.png' alt="">
      <p>店铺</p>
    </div>
    <div class="item-info">
      <img src='~assets/img/detail/bottom-bar3.png' alt="">
      <p>收藏</p>
    </div>
    <div class="btn cart-btn" @click="cartBtnClick">加入购物车</div>
    <div class="btn buy-btn">购买</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data() {
      return {

      }
    },
    methods: {
      cartBtnClick() {
        this.$emit('addToCart');
      }
    },
  }
</script>

<style scoped>
  .bottom-bar {
    background-color: white;
    height: 49px;
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
    .item-info {
      flex: 4;
    } 
      .item-info img {
        margin-top: 4px;
        width: 22px;
        height: 22px;
        vertical-align: middle;
      }
      .item-info p {
        line-height: 20px;
        margin: 0 ;
        font-size: 16px;
      }
    .btn {
      flex: 6;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .cart-btn {
      background-color: yellow;
    }
    .buy-btn {
      background-color: rgb(137, 52, 52);
      color: white;
    }
</style>