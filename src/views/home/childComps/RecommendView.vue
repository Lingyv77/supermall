<template>
  <div class="recommend-wrap">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <p><img :src="item.image" alt=""></p>
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend-wrap {
		display: flex;
		background-color: #fff;
		font-size: 12px;
		padding: 10px 0 20px;
		border-bottom: 10px solid #ededed;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommend-item a {
    text-decoration: none;
    color: rgb(111, 72, 72);
  }

  .recommend-item a:active {
    color: red;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
  }
</style>