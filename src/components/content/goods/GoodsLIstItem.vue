<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItemShow" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">
        <i></i>
        {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'GoodsListItem',
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    },
  },
  methods :{
    // 监听图片加载完成
     // 图片加载完成，解决图片没有加载完成时候better-scroll的bug
    imgLoad(){
      if(this.$route.path.indexOf('home') !==-1){
        // 当图片加载完成向home组件发送事件
        this.$bus.$emit("goodsImgLoadEvent");
      }else if(this.$route.path.indexOf('detail') !==-1){
        this.$bus.$emit("detailImgLoadEvent")
      }
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    goodsItemShow(){
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width:48%;
  padding-bottom: 20px;

}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}
.goods-info .collect {
  position: relative;
}
.goods-info p {
  /* 标题 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.price {
  /* 价格 */
  color: rgb(209, 31, 31);
  margin-right: 20px;
}
  .goods-info .collect::before {
    /* 在收藏前面添加一个收藏星号图标 */
    content: '';
    position: absolute;
    left: -12px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/15px 16px;
  }
</style>