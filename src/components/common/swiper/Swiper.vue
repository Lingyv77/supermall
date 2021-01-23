<template>
  <div id="hy-swiper">
  <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
  </div>
  <slot name="indicator"></slot>
  <div class="indicator">
    <slot name="indicator" v-if="showIndicator && slideCount > 1">
      <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index == currentIndex-1}" :key="index"></div>
    </slot>
  </div>
  </div>
</template>

<script>
  /*
  touchstart   当手指触摸屏幕的时候触发
  touchmove    当手指在屏幕来回的滑动时候触发
  touchend     当手指离开屏幕的时候触发
  
  在每一个触摸点中会记录当前触摸点的坐标 e.touches[0] 第一个触摸点
  pageX   pageY        基于页面（视口）
  */
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
        slideCount: 0, //元素个数
        totalWidth: 0, //swiper宽度
        swiperStyle: {}, //swiper样式
        currentIndex: 1, //当前index
        scrolling: false //当前是否处于滚动
      }
    },
    mounted() { //--当组件挂载时
    // 1.操作DOM, 在前后添加Slide
      setTimeout(() => {
        // 1.操作DOM, 在前后添加Slide
        this.handleDom();
  
        // 2.开启定时器
        this.startTimer()
      },300);
    },
    methods: {
      /**定时器操作**/
      startTimer() { //定时器开始
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval);
      },
      stopTimer() { //定时器停止
        window.clearInterval(this.playTimer)
      },
  
      /**滚动到正确的位置**/
      scrollContent(currentPosition) {
        // 0.设置正在滚动
        this.scrolling = true;
        
        // 1.开始滚动动画
        this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
        this.setTransform(currentPosition);
  
        // 2.判断滚动到的位置
        this.checkPosition();
  
        //3.滚动完成
        this.scrolling = false;
      },
  
      /**校验正确的位置**/
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
          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex - 1);
        },this.animDuration)
      },
            
      /**设置滚动的位置**/
      setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
  
      /**操作DOM, 在DOM前后添加Slide**/
      handleDom() {
        // 1.获取要操作的元素
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');
  
        // 2.保存个数
        this.slideCount = slidesEls.length;
  
        // 3.如果大于1个, 那么在前后分别添加一个slide
        if(this.slideCount > 1) {
          let cloneFrist = slidesEls[0].cloneNode(true); //克隆
          let cloneList = slidesEls[slidesEls.length - 1].cloneNode(true);
          swiperEl.insertBefore(cloneList,slidesEls[0]); //插入
          swiperEl.appendChild(cloneFrist); //添加
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }
  
        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth);
      },
  
      /**拖动事件的处理**/
      touchStart(e) {
        //1.正在滚动中,不可以拖动
        if(this.scrolling) return; 
  
        //2.停止定时器
        this.stopTimer(); 
  
        //3.保存开始滚动的位置
        this.startX = e.touches[0].pageX;
      },
      touchMove(e) {
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX; //拖动距离
        let currentPosition = -this.currentIndex * this.totalWidth; //当前position
        let currentDistance = this.distance + currentPosition; //拖动后positions
  
        // 2.设置当前的位置
        this.setTransform(currentDistance);
      },
      touchEnd() {
        // 1.获取移动的距离
        let currentMove = Math.abs(this.distance);
        
        // 2.判断最终的距离
        if(this.distance === 0) {
          return;
        }else if(this.distance > 0 && currentMove >= this.totalWidth * this.moveRatio) { // 右边移动超过0.25
          this.currentIndex--;
        }else if(this.distance < 0 && currentMove >= this.totalWidth * this.moveRatio) { // 左边移动超过0.25
          this.currentIndex++;
        }
  
        // 3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
  
        // 4.移动完成后重新开启定时器
        this.startTimer();
      },
  
      /**控制上一个, 下一个**/
      previous() {
        this.changeItme(-1);
      },
      next() {
        this.changeItme(1);
      },
      changeitem(num) {
        //1.移出定时器
        this.stopTimer();
  
        //2.修改index和位置
        this.currentIndex += num;
        this.scrollContent(-this.currentIndex * this.totalWidth);
  
        //3.添加定时器
        this.startTimer();
      }
    }
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