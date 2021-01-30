<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick">＜</div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key="index" 
                     class="title-tiem" :class="{active: index === currentIndex}"
                     @click="titleClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  
  export default {
    name: 'DetailNavBar',
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick', index);
      },
      backClick() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
  .back {
    font-size: 30px;
    height: 100%;
    line-height: 40px;
    color: rgb(59, 48, 48);
  }
  
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-tiem {
    flex: 1;
  }

  .active {
    color: red;
  }
</style>