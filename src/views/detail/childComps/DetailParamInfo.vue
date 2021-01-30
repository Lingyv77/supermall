<template>
    <div v-if="Object.keys(paramInfo).length !== 0" class="param-wrap">
        <div v-for="(item, index) in paramInfo.rule" :key="index">
            <div v-for="(list, index) in item" :key="index" class="flex">
                <div v-for="(listItem, index) in list" :key="index" class="rule-list-item">{{listItem}}</div>
            </div>
        </div>
        <div class="boundary">
        </div>
        <div v-for="(info, index) in paramInfo.info" :key="index+2" class="flex info-list-wrap">
            <div>{{info.key}}</div>
            <div>{{info.value}}</div>
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
  .param-wrap {
    border-top:  4px solid #ececec;
    border-bottom: 4px solid #ececec;
    padding-bottom: 20px;
  }
    .boundary {
      height: 3px;
      background-color: #ececec;
      margin: 15px 0 5px 0;
      border-radius: 50%;
    }
    .rule-list-item {
      width: 20%;
      padding: 4px 10px;
      font-size: 16px;
      border-bottom: 1px solid #ececec;
    }
    .info-list-wrap {
      font-size: 14px;
      padding: 4px 10px;
      border-bottom: 1px solid #ececec;
    }
      .info-list-wrap div:first-of-type {
        width: 20%;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .info-list-wrap div:last-of-type {
        width: 80%;
      }
</style>