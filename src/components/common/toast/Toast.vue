<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      // message: {
      //   type: String,
      //   default() {
      //     return ''
      //   }
      // },
      // isShow: {
      //   type: Boolean,
      //   default() {
      //     return false;
      //   }
      // }
    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 1000) {
        this.message = message;
        this.isShow = true;

        setTimeout(() => {
          this.message = '';
          this.isShow = false;
        }, duration)
      }
    },
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: rgba(0,0,0,0.7);
    color: white;
    padding: 5px 15px;
    transform: translate(-50%, -50%);
    border-radius: 3px;
    z-index: 900;
  }
</style>