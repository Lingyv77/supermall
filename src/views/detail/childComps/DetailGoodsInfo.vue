<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length">
        <div class="info-text-wrap">
            <div class="text-top-style"></div>
            <div class="info-text-desc">{{detailInfo.desc}}</div>
            <div class="text-bot-style"></div>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info-text-wrap {
    padding: 10px;
    font-size: 14px;
    box-sizing: border-box;
  }
</style>