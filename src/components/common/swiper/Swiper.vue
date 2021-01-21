<template>
  <div id="hy-swiper">
  <div class="swiper">
    <slot></slot>
  </div>
  <slot name="indicator"></slot>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
      slideCount: 0, //元素个数
      totalWidth: 0, //swiper宽度
      swiperStyle: {}, //swiper样式
      currentIndex: 1, //当前index
      scrolling: false //当前是否处于滚动
    }
  }
}
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }
</style>