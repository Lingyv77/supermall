<template>
  <div id="hy-swiper">
  <div class="swiper">
    <slot></slot>
  </div>
  <slot name="indicator"></slot>
  <div class="indicator">
    <slot name="indicator" v-if="showIndicator && slideCount > 1">
      <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index === currentIndex-1}" :key="index"></div>
    </slot>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: { //间隔时间
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: { //移动比例
      type: Number,
      default: 0.25
    },
    showIndicator: { //是否显示indicator
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 4, //元素个数
      totalWidth: 0, //swiper宽度
      swiperStyle: {}, //swiper样式
      currentIndex: 1, //当前index
      scrolling: false //当前是否处于滚动
    }
  },
  mounted() { //当组件挂载时
  // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      // 1.操作DOM, 在前后添加Slide
      this.handleDom();

      // 2.开启定时器
      this.startTimer()
    },100);
  },
  methods: {
    // 操作DOM, 在DOM前后添加Slide
    handleDom() {
      // 1.获取要操作的元素
      let swiperEl = document.querySelector('.swiper');
      let slidesEls = swiperEl.getElementsByClassName('slide');

      // 2.保存个数
      this.slideCount = slidesEls.length;

    },

    // 定时器操作
    startTimer() { //定时器开始
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
      }, this.interval);
    },
    stopTimer() { //定时器停止
      window.clearInterval(this.playTimer)
    },

    //滚动到正确的位置
    srcollContent(currentPosition) {
      // 0.设置正在滚动
      this.scrolling = true;
      
      // 1.开始滚动动画
      this.swiperStyle.transition = 'transform' + this.animDuration + 'sm';
      this.setTransform(currentPosition);

      // 2.判断滚动到的位置
      this.checkPosition();
    },

    //设置滚动的位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },

    //校验正确的位置
    checkPosition() {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      },this.animDuration)
    }
  },
}
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  
  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>