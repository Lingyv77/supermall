<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        isImageLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if(!this.isImageLoad){
          this.$emit('swiperImageLoad');
          this.isImageLoad = true;
        }
      }
    },
  }
</script>

<style scoped>

</style>