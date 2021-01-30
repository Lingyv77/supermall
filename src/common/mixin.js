import { debounce } from './utils'

export const imageLoadWatchMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);

    this.imageLoadWatch = () => {
      refresh();
    }
    //3.监听item中图片加载完成
    this.$bus.$on('itemImageLoad', this.imageLoadWatch);
  }
}