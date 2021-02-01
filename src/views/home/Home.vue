<template>
    <div id="home">
          <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <tab-control class="tab-control" v-show="isTabFixed"
                       :titles="['流行','新款','精选']" 
                       @tabClick="tabClick" 
                       ref="tabControl1"/>
          <scroll class="content" ref="scroll" 
                  :probeType="3" 
                  :pullUpLoad="true"
                  @scroll="contentScroll"
                  @pullingUp="loadMore">
              <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
              <recommend-view :recommends="recommend"/>
              <feature-view/>
              <tab-control :titles="['流行','新款','精选']" 
                           @tabClick="tabClick" 
                           ref="tabControl2"/>
              <goods-list :goods="showGoods"/>
          </scroll>

          <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  
  import {getHomeMultidata,getHomeGoods} from 'network/home'
  import {imageLoadWatchMixin, backTopMixin} from 'common/mixin'


  export default {
    name: 'home',
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        tabOffsetTop: Infinity,
        isTabFixed: false,
        imageLoadWatch: null
      }
    },
    mixins: [imageLoadWatchMixin, backTopMixin], //mixins (混入写法)
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata();

      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    deactivated() {
      //4.取消事件监听  this.$bus.$off('事件',函数)
      this.$bus.$off('itemImageLoad', this.imageLoadWatch);
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
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break
       }
       this.$refs.tabControl1.currentIndex = index;
       this.$refs.tabControl2.currentIndex = index;
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,0);
      },
      contentScroll(position) {
        //1.判断BackTop是否显示
        this.listenShowBackTop(-position.y);

        //2.决定tabControl是否吸顶(position: fixed)
        this.isTabFixed = (-position.y) >= this.tabOffsetTop;
      },
      loadMore() { //下拉
        this.getHomeGoods(this.currentType);
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
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          
          this.$refs.scroll.finishPullUp();
        })
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    box-sizing: border-box;
    background-color: rgb(236, 236, 236);
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

  .content {
    height: calc(100% - 49px);
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
    margin-top: -2px;
  }
</style>