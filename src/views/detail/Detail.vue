<template>
  <div id="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
 /**
  * https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22appPlat%22%3A%22m%22%2C%22sourceParams%22%3A%22%22%2C%22template%22%3A%221-2-detail_normal-1.0.0%22%2C%22iid%22%3A%221mb4w12%22%2C%22activityId%22%3A%22%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1611731926686&mw-uuid=30b8b31a-9862-4e34-ba24-8fcf6a54e332&mw-h5-os=Android&mw-sign=52e83ee583cf7b84367aec14cacd0c6e&callback=mwpCb1&_=1611731926688
  * https://api.mogu.com/h5/http.detail.api/1/?data=%7B%22appPlat%22%3A%22m%22%2C%22sourceParams%22%3A%22%22%2C%22template%22%3A%221-2-detail_normal-1.0.0%22%2C%22iid%22%3A%221my3gy8%22%2C%22activityId%22%3A%22%22%7D&mw-appkey=100028&mw-ttid=NMMain%40mgj_h5_1.0&mw-t=1611731847610&mw-uuid=30b8b31a-9862-4e34-ba24-8fcf6a54e332&mw-h5-os=Android&mw-sign=fb1632ef15d6c4ac1f66b62dbfd1bdd7&callback=mwpCb1&_=1611731847612
  */
  export default {
    name: "Detail",
    data() {
      return {
        iid: null
      }
    },
    components: {
      DetailNavBar
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;

      //2.根据iid请求详情数据

    },
  }
</script>

<style scoped>
  
</style>