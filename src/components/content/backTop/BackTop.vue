<template>
  <div class="back-top">
    <img src="~assets/img/common/back-top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .back-top {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 10px;
    bottom: 59px;
  }
  .back-top img{
    width: 40px;
    height: 40px;
    opacity: 0.8;
  }
</style>