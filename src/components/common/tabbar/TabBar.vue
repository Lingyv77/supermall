<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    display:flex;
    background-color: rgb(255, 255, 255);

    position:fixed;
    left:0;
    right: 0;
    bottom:0;

    box-shadow: 0 -3px 5px rgb(250, 241, 241) ;
  }
</style>
