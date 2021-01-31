import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'
import { BACK_POSITION } from 'common/const';

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

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    listenShowBackTop(positionY) {
      this.isShowBackTop = positionY >= BACK_POSITION;
    }
  },
}