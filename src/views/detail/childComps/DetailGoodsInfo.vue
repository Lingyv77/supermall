<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
        <div class="info-text-wrap">
            <div class="text-top-style"></div>
            <div class="info-text-desc">{{detailInfo.desc}}</div>
            <div class="text-bot-style"></div>
        </div>
        <div class="img-list-wrap" v-for="(item,index) in detailInfo.detailImage" :key="index">
            <div class="desc">{{item.key}}</div>
            <div v-for="(item,index) in item.list" :key="index">
                <img :src="item" alt="" @load="imgLoad">
            </div>
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
    },
    data() {
      return {
        en: false
      }
    },
    methods: {
      imgLoad() {
          this.$emit('imgLoad');
      }
    },
  }
</script>

<style scoped>
  .info-text-wrap {
    padding: 10px;
    font-size: 14px;
    height: auto;
    box-sizing: border-box;
    position: relative;
  }
    .info-text-desc {
      margin: 10px;
    }
    .text-top-style {
      width: 120px;
      height: 2px;
      background-color: rgb(154, 143, 143);
    }
      .text-top-style::before {
        content: '';
        display: block;
        width: 7px;
        height: 7px;
        background: rgb(42, 11, 11);
        margin-top: 2px;
      }
    .text-bot-style {
      position: absolute;
      width: 120px;
      height: 2px;
      background-color: rgb(154, 143, 143);
      right: 10px;
      bottom: 0px;
    }
      .text-bot-style::before {
        content: '';
        display: block;
        width: 7px;
        height: 7px;
        background: rgb(42, 11, 11);
        position: absolute;
        right: 0;
        bottom: 2px;
      }
  .desc {
		font-size: 14px;
		padding-bottom: 6px;
		line-height: 20px;
		margin: 4px 0;
		text-indent: 10px;
	}
  .img-list-wrap div img {
    width: 100%;
  }

</style>