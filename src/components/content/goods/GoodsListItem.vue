<template>
  <div class="goodsitem" @click="itemClick">
      <img :src="goodsItem.show.img" alt="" @load="imageLoad">
      <div class="goods-title">
        <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="cfav">⚝{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad');
      },
      itemClick() {
        this.$router.push('/detail/'+this.goodsItem.iid);
      }
    },
  }
</script>

<style scoped>
  .goodsitem{
    color: rgb(69, 64, 64);
    height: auto;
    min-height: 331px;
    float: left;
    margin: 3px;
    width: calc(50% - 6px);
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }

  .goodsitem img {
    width: 100%;
    height: 80%;
    min-height: 174px;
    margin: 0;
    padding: 0;
  }

  .goods-title{
    width: 100%;
    height: 20%;
    min-height: 66px;
    position: relative;
    padding: 4px 4px 0 4px;
    box-sizing: border-box;
  }

  .goodsitem p {
    font-size: 12px;
    margin: 0;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
  }

  .goodsitem .price {
    font-size: 14px;
    font-weight: 600;
    color: rgb(32, 31, 31);
    position: absolute;
    left: 10px;
    bottom: 7px;
  }

  .goodsitem .cfav {
    font-size: 12px;
    position: absolute;
    right: 12px;
    bottom: 7px;
  }
</style>