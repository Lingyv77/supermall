<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info-wrap">
      <div class="comment-title flex">
          <div>用户评价</div>
          <div>更多</div>
      </div>
      <div class="comment-user-info">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-text">{{commentInfo.content}}</div>
      <div class="comment-goods-info">
        <span class="comment-time">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-images-info flex">
          <div v-for="(item, index) in commentInfo.images" :key="index">
              <img :src="item" alt="">
          </div>
      </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: "DatailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value);
        return formatDate(date,'yyyy-MM-dd')
      } 
    }
  }
</script>

<style scoped>
  .comment-info-wrap {
    padding: 4px 10px;
  }
    .comment-title {
      justify-content: space-between;
      border-bottom: 2px solid #ececec;
      padding: 10px 0;
      font-size: 14px;
    }
    .comment-user-info {
      padding: 10px 0;
    }
      .comment-user-info img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
      }
    .comment-text {
      font-size: 12px;
      line-height: 18px;
    }
    .comment-goods-info {
      font-size: 12px;
      color: #907979;
      margin: 4px 0;
    }
      .comment-time {
        margin-right: 10px;
      }

    .comment-images-info img {
      width: 60px;
      height: 60px;
      margin-right: 6px;
    }
</style>