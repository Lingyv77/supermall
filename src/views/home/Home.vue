<template>
    <div id="home">
          <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <scroll class="content" ref="scroll" 
          :probeType="3" 
          :pullUpLoad="true"
          @scroll="contentScroll"
          @pullingUp="loadMore">
              <home-swiper :banners="banners"/>
              <recommend-view :recommends="recommend"/>
              <feature-view/>
              <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
              <goods-list :goods="showGoods"/>
          </scroll>

          <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
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
        currentType: 'pop',
        isShowBackTop: false
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
      this.getHomeGoods('pop');
      this.getHomeGoods('news');
      this.getHomeGoods('sell');
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
      contentScroll(position) {
        if(-(position.y) >= 1000) {
          this.isShowBackTop = true;
        }else {
          this.isShowBackTop = false;
        }
      },
      loadMore() {
        console.log('上拉加载更多');
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.bscroll.refresh(); //重新刷新BScroll
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
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        this.$axios.get(type+page).then(res => {this.goods[type].list.push(...res.data.result.wall.docs)});
        this.goods[type].page += 1;
        
        this.$refs.scroll.finishPullUp();
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