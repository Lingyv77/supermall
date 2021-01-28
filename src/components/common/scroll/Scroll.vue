<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    data() {
      return {
        bscroll: null
      }
    },
    props:{
      probeType: {
        type: Number,
        default() {
          return 0;
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    mounted() {
        //创建BScroll对象
        this.bscroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          click: true
        })

        if(this.probeType === 2 || this.probeType === 3) {
          //2.监听滚动的位置
          this.bscroll.on('scroll', position => {
            this.$emit('scroll', position);
          })
        }

        if(this.pullUpLoad) {
          //3.监听上拉
          this.bscroll.on('pullingUp', () => {
            this.$emit('pullingUp');
          })
        }
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.bscroll.scrollTo(x, y, time)
      },
      refresh() {
        this.bscroll.refresh(); //重新刷新BScroll
      },
      finishPullUp() {
        this.bscroll && this.bscroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>