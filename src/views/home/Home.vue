<template>
    <div id="home">
          <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <scroll class="content" ref="scroll">
              <home-swiper :banners="banners"/>
              <recommend-view :recommends="recommend"/>
              <feature-view/>
              <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
              <goods-list :goods="showGoods"/>
          </scroll>

          <back-top @click.native="backTopClick"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeWiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'
  
  import {getHomeMultidata} from 'network/home'


  export default {
    name: 'home',
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop'
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    }
    ,
    created() {
      //1.请求多个数据
      this.getHomeMultidata();

      //2.请求商品数据
      this.getHomeGoods();
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
       switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'news'
            break;
          case 2:
            this.currentType = 'sell'
            break
       }
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,0);
      },

      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods() {
        this.$axios.get('/pop').then(res => {this.goods.pop.list = res.data.result.wall.docs})
        this.$axios.get('/news').then(res => {this.goods.news.list = res.data.result.wall.docs})
        this.$axios.get('/sell').then(res => {this.goods.sell.list = res.data.result.wall.docs})
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    box-sizing: border-box;
  }

  .home-nav {
    background-color: rgb(91, 196, 91);
    color: rgb(253, 252, 252);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
</style>