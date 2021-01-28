<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo)">
        <div class="info-text-wrap">
            
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