<template>
    <div class="detail-shop-info" v-if="Object.keys(shop)">
        <div class="flex shop-name-info">
            <img :src="shop.shopLogo" alt="">
            <div>{{shop.name}}</div>
        </div>
        <div class="flex shop-other-info">
            <div class="flex left-other-info">
                <div>
                  <div>{{shop.cSells|saveNum}}</div>
                  <div>总销量</div>
                </div>
                <div>
                  <div>{{shop.cGoods}}</div>
                  <div>全部宝贝</div>
                </div>
            </div>
            <span class="boundary"></span>
            <div class="right-other-info">
                <div v-for="(item,index) in shop.score" :key="index">
                  {{item.name}}
                  <span class="score" :class="{active: item.isBetter}">{{item.score}}</span>
                  <span class="bg-score" :class="{bgActive: item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
                </div>
            </div>
        </div>
        <div class="enter-shop-wrap">
          <div>进店逛逛</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      saveNum(value) {
        if (value < 10000) 
          return value;
        else
          return (value/10000).toFixed(1) + "万";
      }
    }
  }
</script>

<style scoped>
  .shop-name-info {
    margin: 20px 10px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(126, 54, 54);
  }
    .shop-name-info img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
			vertical-align: middle;
    }
  
  .boundary {
    width: 1px;
    background-color: #f2f2f2;
    border-radius: 50%;
  }

  .shop-other-info div {
    flex: 1;
  }

  .left-other-info {
    text-align: center;
  }
    .left-other-info div div:first-of-type {
      margin-top: calc(50% - 18px);
      margin-bottom: 8px;
      color: rgb(52, 31, 31);
      font-weight: 600;
    }
    .left-other-info div div:last-of-type {
      font-size: 14px;
    }

  .right-other-info {
    padding-left: 15px;
    box-sizing: border-box;
  }
    .right-other-info div {
      padding: 5px 0 5px 0;
      box-sizing: border-box;
    }
      .score {
        margin-left: 8px;
        color: green;
      }
      .right-other-info .active {
        color: red;
      }
      .bg-score {
        position: absolute;
        right: 10px;
        color: white;
        background-color: green;
        border-radius: 2px;
      }
      .right-other-info .bgActive {
        background-color: red;
      }

    .enter-shop-wrap {
      text-align: center;
      padding-right: 15px;
      box-sizing: border-box;
    }
      .enter-shop-wrap div{
        display: inline-block;
		  	background-color: #f2f2f2;
		  	font-size: 12px;
		  	padding: 6px 30px;
		  	border-radius: 100px;
		  	margin: 10px;
      }
</style>