<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'home',
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    NavBar,
    // Swiper,
    // SwiperItem
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
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