<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{itme.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>