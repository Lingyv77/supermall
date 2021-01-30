<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav"/>
          <scroll class="content" ref="scroll" 
                  :probeType="3" 
                  :pullUpLoad="true">
          <detail-Swiper :top-images="topImages"/>
          <detail-base-info :goods="goods"/>
          <detail-shop-info :shop="shop"/>
          <detail-goods-info :detail-info="detailInfo" @imgLoad="goodsImgLoad"/>
          <detail-param-info :param-info="paramInfo"/>
          <detail-comment-info :comment-info="commentsInfo"/>
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

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, Shop, Param} from 'network/detail'
  
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
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo
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
        })
    },
    methods: {
      goodsImgLoad() {
        this.$refs.scroll.refresh();
        
      }
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
</style>