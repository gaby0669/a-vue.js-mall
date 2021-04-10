<template>
  <div id="detail">
    <detail-nav-bar @itemClickEvent='changeScrollOffset' ref="nav"/>
    <scroll class="content" ref="scroll" @scrollEvent='scrollOn' :probe-type='3'>
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shopInfo='shopInfo'/>
      <detail-goods-info :goodsInfo='goodsInfo' @goodsInfoImgLoad='goodsInfoImgLoad'/>
      <detail-params-info :paramInfo="paramInfo" ref="paramsRef"/>
      <detail-comment-info :commentInfo='commentInfo' ref="commentRef"/>
      <goods-list :goods='recommend' ref="recommendRef"/>
    </scroll>
    <detail-bottom-bar @addEvent='addToCart'/>
    <back-top @click.native="BackTopClick" v-show="toShow"/>
    <div class="addCartSuccess" v-show="popWindow">
      <p>该商品已添加到购物车</p>
    </div>
  </div>
</template>

<script>
import DetailNavBar from './childCopms/DetailNavBar'
import DetailSwiper from './childCopms/DetailSwiper'
import DetailBaseInfo from './childCopms/DetailBaseInfo'
import DetailShopInfo from './childCopms/DetailShopInfo'
import DetailGoodsInfo from './childCopms/DetailGoodsInfo'
import DetailParamsInfo from './childCopms/DetailParamsInfo'
import DetailCommentInfo from './childCopms/DetailCommentInfo'
import DetailBottomBar from './childCopms/DetailBottomBar'

import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
import Scroll from 'components/common/scroll/Scroll'


import { getDetail, Goods , Shop, GoodsParam, getDetailRecommend} from 'network/detail'
import {debounce} from 'common/untils'
 

export default {
  name : 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,

    GoodsList,
    BackTop,



    Scroll
  },
  
  data(){
    return{
      iid :null,
      topImages:[],
      goods : {},
      shopInfo: {},
      goodsInfo:{},
      paramInfo: {},
      commentInfo: {},
      recommend:[],
      themeTopYs:[],
      bcFuncTheme: null,
      currentIndex:0,
      toShow : false,
      popWindow: false
      
    }
  },
  created(){
    // 保存传入的iid
    this.iid = this.$route.params.iid
    
    // 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      // console.log(data);
      //1.获取顶部图片轮播数据
      this.topImages = data.itemInfo.topImages
      // 2.获取(商品信息)详情页轮播图下方数据
      // console.log(this.goods);
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3.获取商家信息
      // console.log(this.shopInfo)
      this.shopInfo = new Shop(data.shopInfo)
      // 4.获取商品图片信息
      this.goodsInfo = data.detailInfo
      // 5.获取商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // console.log(data.itemParams);
      //6.获取评论
      // console.log(data.rate);
      if(data.rate.cRate){
        this.commentInfo = data.rate.list[0]
      }
      // 7.获取推荐信息
      getDetailRecommend().then(res =>{
        console.log(res); 
        this.recommend = res.data.list
      })
    })
  },
  mounted() {
    /**
     * 1.监听事件总线中商品图片全部加载完成
     * 运用函数防抖动
     */
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("detailImgLoadEvent", () => {
      refresh()
    })
    //给跳转做防抖
    this.bcFuncTheme = debounce(() => {
      this.themeTopYs = [0];
      // 获取组件offestTop给themeTopYs赋值
      this.themeTopYs.push(this.$refs.paramsRef.$el.offsetTop);
      this.themeTopYs.push(this.$refs.commentRef.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommendRef.$el.offsetTop);
    }, 100);
  },
  methods:{
    goodsInfoImgLoad(){
      this.$refs.scroll.refresh()
      // 记录跳转位置 themeTopYs[]
      this.bcFuncTheme()
    },
    // 通过nav-bar跳转detail的指定位置
    changeScrollOffset(index){
      // console.log('--------');
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    // 记录滚动位置
    scrollOn(position){
      // // console.log(position);
      const positionY = -position.y
      // 让backtop在一定位置显示
      this.toShow = positionY >1500
      // 随着detail页面的滚动 nav-bar发生变化，实现联动效果
      // console.log(positionY);
      const length = this.themeTopYs.length
      if(positionY>=this.themeTopYs[3]){
        this.$refs.nav.currentIndex =3
      }else if(positionY >=this.themeTopYs[2]){
        this.$refs.nav.currentIndex =2
      }else if(positionY >=this.themeTopYs[1]){
        this.$refs.nav.currentIndex =1
      }else{
        this.$refs.nav.currentIndex =0
      }    
      // let length = this.themeTopYs.length;
      //       //hack做法，
      //   for(let i = 0; i<length; i++){
      //     if(this.currentIndex!==i && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1]){
      //       this.currentIndex = i;
      //       this.$refs.nav.currentIndex = i;

      //       }
      //     }
         
    } ,
    // 回到顶部
    BackTopClick(){
      this.$refs.scroll.scrollTo(0,0,200)
    },
    // 添加购物车
    addToCart(){
      // console.log('------');
      // 将数据发送到vuex
      //1.获取购物车需要展示的信息
      const product ={
        iid : this.iid,
        desc : this.goods.desc,
        price : this.goods.lowNowPrice,
        title : this.goods.title,
        img : this.topImages[0]
      }
      // 2.将商品添加到购物车里
      // this.$store.dispatch('addCart',product)
      // // 通过$store.dispatch调用actions js中的方法
      this.$store.dispatch("addCart",product).then((res)=>{
        // console.log(res);
        this.$toast.show(res)
      })
      // // 显示弹窗
      // this.popWindow = true
      // setTimeout(()=>{
      //     this.popWindow = false
      // },1000)
    }
  },
  
}
</script>

<style scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.addCartSuccess{
  background-color: rgb(255, 255, 255);
  width: 250px;
  height: 100px;
  line-height: 100px;
  position: absolute;
  bottom: 0;
  right:0;
  left: 0;
  top: 0;
  margin: auto;
  z-index: 99;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  
}
</style>
