<template>
    <div v-if="Object.keys(paramInfo).length !== 0" class="detail-param-info">
        <div v-for="(item, index) in paramInfo.rule" :key="index">
            <div v-for="(list, index) in item" :key="index" class="flex">
                <div v-for="(listItem, index) in list" :key="index">{{listItem}}</div>
            </div>
        </div>
        <div v-for="(info, index) in paramInfo.info" :key="index">
            <div></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>

</style>