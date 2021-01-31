<template>
    <div class="cart-goods">
        <div class="cart-product flex" v-for="(item, index) in productInfo" :key="item.iid">
            <div class="cart-list-left flex">
                <check-button :isChecked="item.checked" @click.native="checkClick(index)"/>
                <img :src="item.image" class="good-img" alt="商品图片">
            </div>
            <div class="cart-list-right flex">
                <div class="good-name">{{item.title}}</div>
                <div class="good-desc">{{item.desc}}</div>
                <div class="good-info flex">
                    <div class="price">￥{{item.price}}</div>
                    <div class="count">x{{item.count}}</div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
  import CheckButton from 'components/content/checkButtom/CheckButtom';

  export default {
  components: { CheckButton },
    name: "CartListItem",
    props: {
      productInfo: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      checkClick(index) {
        this.productInfo[index].checked = ! this.productInfo[index].checked;
      }
    },
  }
</script>

<style scoped>
  .cart-goods {
    font-size: 14px;
  }
    .cart-product {
      padding: 10px;
      border-bottom: 1px solid rgb(126, 103, 103);
    }
      .good-img {
        width: 80px;
        height: 100px;
        border-radius: 5px;
      }
    .cart-list-right {
      padding-left: 10px;
      flex-direction: column;
      justify-content: space-between;
      width: 65%;
    }
      .good-name {
        font-size: 18px;
        height: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
      .good-desc {
        font-size: 12px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .good-info {
        justify-content: space-between;
        margin-top: 10px;
        font-weight: 600;
      }
        .price {
          color: rgb(196, 88, 16);
        }
</style>