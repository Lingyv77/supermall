<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
          <scroll class="content" ref="scroll" 
                  :probeType="3" 
                  :pullUpLoad="true"
                  @scroll="contentScroll">
          <detail-Swiper :top-images="topImages"/>
          <detail-base-info :goods="goods"/>
          <detail-shop-info :shop="shop"/>
          <detail-goods-info :detail-info="detailInfo" @imgLoad="goodsImgLoad"/>
          <detail-param-info ref="param" :param-info="paramInfo"/>
          <detail-comment-info ref="comment" :comment-info="commentsInfo"/>
          <goods-list ref="recommend" :goods="recommend" class="recommend-goods"/>
      </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodsList'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, Shop, Param, getRecommend} from 'network/detail'
  import {debounce} from 'common/utils'
  import {imageLoadWatchMixin} from 'common/mixin'
  
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentsInfo: {},
        recommend: [],
        detailWatch: null,
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    mixins: [imageLoadWatchMixin],
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.query.iid;

      //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          const data = res.result;

          //1.获取顶部的图片轮播图
          this.topImages = data.itemInfo.topImages;
          //2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          //3.获取商家详情
          this.shop = new Shop(data.shopInfo);
          //4.商品图片详情数据
          this.detailInfo = data.detailInfo;
          //5.获取参数信息
          this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule);
          //6.取出评论的信息
          this.commentsInfo = data.rate.list[0];
          //7.请求推荐数据
          getRecommend().then(res => {
            this.recommend = res.data.list;
          })
        })

          // //第一次值不对: this.$refs.params.$el 组件压根没被渲染
          // this.themeTopYs = [];
          // this.themeTopYs.push(0);
          // this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
          // this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
          // this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);

        // this.$nextTick(() => { //this.$nextTick(() => { //dom渲染完后执行})
        //   this.themeTopYs = [];
        //   //第二次值不对: 图片没有计算在类
        //   //根据最新的数据, 对应的DOM时一斤被渲染出来
        //   //但是图片依然是没有加载完(目前获取offsetTop不包含其他中的图片)
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
        //   this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
        //   this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop);
        // })
        this.getThemeTopY = debounce(() => {
          this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.param.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        },200)
    },
    methods: {
      goodsImgLoad() {
        this.$refs.scroll.refresh();
        this.$nextTick(() => { //this.$nextTick(() => { //dom渲染完后执行})
          this.getThemeTopY()
        })
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],500);
      },
      contentScroll(position) {
        const positionY = -position.y
        for (let i in this.themeTopYs) {
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[Number(i)+1] || 
          positionY >= this.themeTopYs[i] && Number(i) === this.themeTopYs.length -1 )) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = Number(i);
          }
        }
      }
    },
    destroyed() {
      //4.取消事件监听  this.$bus.$off('事件',函数)
      this.$bus.$off('itemImageLoad', this.imageLoadWatch);
    },
  }
</script>

<style scoped>
  #detail {
    background-color: white;
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
    overflow: hidden;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content {
    height: calc(100% - 49px);
    position: relative;
  }

  .recommend-goods {
    padding: 0 8px;
  }
</style>