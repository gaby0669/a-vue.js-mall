<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">522主街</div>
    </nav-bar>   
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        v-show="toShow"
        ref="tabControl1"
        class="tabControl"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollEvent="getPostion"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="SwiperImgLoad" />
      <home-dead-line></home-dead-line>
      <recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 添加.navtiv属性使得组件也可以点击 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// components
import Scroll from "components/common/scroll/Scroll"
import NavBar from "components/common/navbar/NavBar"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import BackTop from "components/content/backTop/BackTop"

// home
import HomeSwiper from "./childComps/HomeSwiper"
import RecommendView from "./childComps/RecommendView"
import FeatureView from "./childComps/FeatureView"

//other
import { getHomeMultidata, getHomeGoods } from "network/home"
import { debounce } from "common/untils"
import HomeDeadLine from './childComps/HomeDeadLine.vue'

export default {
  name: "Home",
  components: {
    Scroll,
    GoodsList,
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    BackTop,
    HomeDeadLine,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      taboffestTop: 0,
      toShow: false,
      saveY : 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
  },  

  created() {
    //组件创建完还没挂载 利用生命周期函数，组件创建，就发送网络请求
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
    
  },
  mounted() {
    /**
     * 1.监听事件总线中商品图片全部加载完成
     * 运用函数防抖动
     */
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("goodsImgLoadEvent", () => {
      refresh()
    })
  },

  /**
   * 网络请求的方法
   * 网络相关
   */
  methods: {
    /**
     * 发射事件相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
          break
      }
      // 让两个tabconctrol的currentIndex 保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 点击回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 400)
    },
    //获取滚动位置
    getPostion(position) {
      // 1.是否显示backTop图标
      this.isShowBackTop = -position.y > 1000
      //2. 判断 tabControl是否吸顶
      this.toShow = -position.y > this.taboffestTop
    },
    SwiperImgLoad() {
      //等到 swiper的图片加载好之后
      this.taboffestTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 下拉加载更多
    loadMore() {
      //下拉加载更多goods，但是会有bug，该bug由于DOM高度问题
      //图片的DOM高度是异步加载的，所以没那么快能加载出来，会导致scroll的高度跟不上
      //如何解决？
      //让img每次加载完之后，就refresh()一次滚动条
      this.getHomeGoods(this.currentType)
    },
    // 获取轮播图数据
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
        .catch((err) => {
          console.log(err)
        });
    },
    //获取商品数据
    getHomeGoods(type) {
      // 当前page为0
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // 将数据列表一个个放进goods[type].list的数组中
        console.log(res.data);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 下拉加载更多
        this.$refs.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
#home {
  /**
  * 有了BS之后，可以不需要这2个 
  * padding-top: 44px;
  * padding-bottom: 49px;
  * 下方BS的.wrapper样式里就有 top44 bottom49
  一定要有home的高度，否则其子对象wrapper无法正确显示 */
  
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  font-size: 20px;
  color: #fff;
  /**
  * 原生滚动时，需要这个，有了BS，就不用下面的了
  *position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%; */
}
.tab-control {
  position: relative;
  z-index: 9;
}
/**
  * 由于用了better-scroll已经失效
  * .home_tab_control {
  *   position: sticky;
  *   top: 44px;
  *   z-index: 9; 
  * }
  */

/* .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 100px;
  overflow: hidden;
} */
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>