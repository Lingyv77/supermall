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
    methods: {
      scrollTo(x, y, time = 500) {
        this.bscroll.scrollTo(x, y, time)
      }
    },
    mounted() {
      setTimeout(() => {
        this.bscroll = new BScroll(this.$refs.wrapper,{
          click: true
        })
      }, 1500);
    },
  }
</script>

<style scoped>

</style>