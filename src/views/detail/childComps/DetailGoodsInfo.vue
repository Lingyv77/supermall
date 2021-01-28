<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length">
        <div class="info-text-wrap">
            <div class="info-text-desc">{{detailInfo.desc}}</div>
        </div>
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

</style>