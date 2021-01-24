<template>
  <div class="goodsitem">
    <a :href="goodsItem.link" class="good-a">
      <img :src="goodsItem.img" alt="">
      <div>
        <p>{{goodsItem.title}}</p>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="cfav">⚝{{goodsItem.cfav}}</span>
      </div>
    </a>
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
    }
  }
</script>

<style scoped>
   .good-a {
     text-decoration: none;
     color: rgb(69, 64, 64);
   }
   
  .goodsitem{
    position: relative;
    height: 270px;
    float: left;
    margin: 3px;
    width: calc(50% - 6px);
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }

  .goodsitem img {
    width: 100%;
    height: 200px;
  }

  .goodsitem p {
    font-size: 12px;
    transform: translateY(-10px);
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
    bottom: 3px;
  }

  .goodsitem .cfav {
    font-size: 12px;
    position: absolute;
    right: 12px;
    bottom: 3px;
  }
</style>