<template>
    <div class="cheack-bottom">
      <div :class="{check: isChecked}">
        <img src="~assets/img/cart/status_ok.png" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked:{
        type: Boolean,
        default() {
          return false;
        }
      }
    }
  }
</script>

<style scoped>
  .cheack-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 8px;
  }
    .cheack-bottom div {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      box-shadow: 0 0 1px 2px rgb(91, 148, 91);
      position: relative;
    }
    .cheack-bottom img {
      position: absolute;
       width: 20px;
       height: 20px;
     }
    .check {
      background-color: rgb(91, 148, 91);
    }
</style>