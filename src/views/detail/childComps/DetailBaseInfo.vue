<template>
    <div v-if="Object.keys(goods).length" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="new-price">{{goods.price}}</span>
            <span class="old-price" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
            <span class="discount-desc" v-if="goods.discountDesc">{{goods.discountDesc}}</span>
        </div>
        <div class="other-info">
            <div>{{goods.columns[0]}}</div>
            <div>{{goods.columns[1]}}</div>
            <div>{{goods.services[goods.services.length-1].name}}</div>
        </div>
        <div class="serves-wrap">
            <div v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">{{goods.services[index-1].name}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    padding: 6px;
    padding-top: 8px;
    font-size: 14px;
  }

  .info-title {
    font-size: 14px;
    color: rgb(30, 29, 29);
    font-weight: 600;
  }

  .info-price {
    margin-top: 5px;
  }
    .new-price {
      font-size: 20px;
      color: rgb(226, 55, 55);
      font-weight: 600;
    }
    .old-price {
      color: rgb(191, 57, 57);
      margin-left: 10px;
      text-decoration: line-through;
    }
    .discount-desc {
      margin-left: 8px;
      transform: translateY(-8px);
      height: 15px;
      line-height: 15px;
      padding: 3px;
      font-size: 10px;
      width: auto;
      display: inline-block;
      text-align: center;
      background-color: red;
      color: rgb(238, 247, 224);
      border-radius: 9px;
    }

  .other-info {
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
    padding: 10px 4px;
    border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
  }

  .serves-wrap {
    display: flex;
    font-size: 12px;
		color: #333;
		padding: 10px 4px;
		justify-content: space-between;
		border-bottom: 4px solid #ededed;
  }
    .serves-wrap img {
      height: 12px;
      width: 12px;
      vertical-align: middle;
    }
</style>