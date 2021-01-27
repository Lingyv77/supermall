<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-Swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'

  import {getDetail, Goods} from 'network/detail'
  
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: null
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;

      //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          //1.获取顶部的图片轮播图
          this.topImages = res.result.itemInfo.topImages;

          //2.获取商品信息
          const data = res.result;
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          console.log(this.goods)
        })
    },
  }
</script>

<style scoped>
  #detail {
    background-color: white;
  }
</style>