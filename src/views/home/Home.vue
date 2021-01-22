<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommend"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeWiper'
  import RecommendView from './childComps/RecommendView'
  
  import {getHomeMultidata} from 'network/home'

  export default {
    name: 'home',
    data() {
      return {
        banners: [],
        recommend: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: rgb(43, 142, 43);
    color: rgb(240, 226, 226);
  }
</style>