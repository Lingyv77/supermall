<template>
    <tab-bar class="tab-bar">
      <tab-bar-item path='/home' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/ico3_hover.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/ico3.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/ico5_hover.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/ico5.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/ico4_hover.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/ico4.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>   
       <tab-bar-item path='/profile' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/ico6_hover.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/ico6.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>        
    </tab-bar>
</template>

<script>
//template中元素src使用别名要加~(别名) script使用则直接(别名)
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>


