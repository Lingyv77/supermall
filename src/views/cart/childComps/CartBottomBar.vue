<template>
  <div class="cart-bottom-bar flex">
    <div class="checked flex"><check-button @click.native="checkedBetter" :is-checked="checkedAll"/><span>全选</span></div>
    <div class="counter">合计:￥{{totalPrice}}</div>
    <div class="go-to-buy">去计算({{checkLength}})</div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton';

  import {mapGetters} from 'vuex'
 
  export default {
    name: "CartBottomBar",
    components: { CheckButton },
    mounted() {
      this.$bus.$on('checkItemClick', () => {
        console.log('eee')
      })
    },
    methods: {
      checkedBetter() {
        if (this.checkedAll)
          this.cartList.map(item => item.checked = false);
        else
          this.cartList.map(item => item.checked = true);
          
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked;
        }).reduce((accumulator, currentValue) =>  accumulator + currentValue.price * currentValue.count ,0).toFixed(2);
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length;
      },
      checkedAll() {
        return this.cartList.length === 0 ? false : this.cartList.every(item => item.checked === true);
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    height: 40px;
    box-shadow: 1px 0 3px rgb(91, 148, 91);
    position: relative;
    line-height: 40px;
  }
    .checked {
      margin-left: 10px;
      margin-right: 20px;
    }
    .counter {
      flex: 5;
    }
    .go-to-buy {
      background-color: rgb(91, 148, 91);
      box-shadow: 1px 0 3px rgb(40, 79, 40);
      flex: 3;
      color: white;
      text-align: center;
    }
</style>