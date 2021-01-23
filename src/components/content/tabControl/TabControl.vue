<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
    class="tab-control-item"
    :class="{active:index === currentIndex}" @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: white;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 6px;
  }

  .active span {
    border-bottom: 3px solid rgb(142, 118, 21);
    color: red;
  }
</style>