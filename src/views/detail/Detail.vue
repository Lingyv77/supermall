<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav"/>
          <scroll class="content" ref="scroll" 
                  :probeType="3" 
                  :pullUpLoad="true">
          <detail-Swiper :top-images="topImages"/>
          <detail-base-info :goods="goods"/>
          <detail-shop-info :shop="shop"/>
          <detail-goods-info :detail-info="detail-info"/>
      </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, Shop} from 'network/detail'
  
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;

      //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          const data = res.result;

          //1.获取顶部的图片轮播图
          this.topImages = data.itemInfo.topImages;
          //2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          //3.获取商家详情
          this.shop = new Shop(data.shopInfo);
          //4.保存商品详情数据
          this.detailInfo = data.detailInfo;
        })
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