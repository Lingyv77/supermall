<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot  name='item-icon'></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaaBbarItme',
  data() {
    return {
      // isActive: true //不该写死
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1; //组路由是否处于活跃状态
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      if(this.path != this.$route.path){
        this.$router.push(this.path);
      }
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align:center;
    height: 49px;
    font-size: 14px;
    font-weight: 600;
    line-height: 12px;
  }
  .tab-bar-item img {
    width:24px;
    height:24px;
    margin: 3px;
  }
</style>