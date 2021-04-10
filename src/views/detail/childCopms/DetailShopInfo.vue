<template>
  <div id="detail-shop-info">
    <div class="shop-name">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="score-info">
      <div class="score-left">
        <div class="score-sell">
          <div>{{ sellValue }}万</div>
          <span>总销量</span>
        </div>
        <div class="score-item">
          <div>{{ shopInfo.goodsCount }}</div>
          <span>全部宝贝</span>
        </div>
      </div>
       <div class="score-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td :style="{ color: item.isBetter ? 'red' : 'green' }">
              {{ item.score }}
            </td>
            <td
              style="color: white;"
              :style="{ backgroundColor: item.isBetter ? 'red' : 'green' }"
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="come-shop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'DetailShopInfo',
  props:{
    shopInfo:{
      type :Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    // 计算机销量
    sellValue(){
      return (this.shopInfo.sells /10000).toFixed(1)
    }
  }

}
</script>

<style scoped>
#detail-shop-info {
  padding: 20px 10px;
  border-bottom: 0.128rem solid rgba(128, 128, 128, 0.2);
  font-size: 0.75rem;
}
/* logo跟名字 */
.shop-name img {
  width: 45px;
  border: 1px solid #999;
  border-radius: 50%;
}
.shop-name span {
  margin-left: 10px;
  position: relative;
  top: -16px;
  font-size: 20px;
}

/**
  * 商店信息左右两侧的样式，整个商店信息是弹性盒子，
  * 可左边用弹性盒子做，右边用table做
  */
.score-info {
  padding: 15px;
  display: flex;
  
}
.score-left,
.score-right {
  flex: 1;
  
}
/* 给score_left也做弹性盒子， */
.score-left {
  display: flex;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  
}
.score-sell{
  margin-right: 20px;
}

.score-right{
  border-left: 1px solid #999;
  padding-left: 30px;
  margin-left: 25px;
  font-size: 16px;
}
/**
  * 右边用table做的
  */

/**
  * 进店逛逛的样式
  */
.come-shop {
  text-align: center;
  font-size: 16px;
  
}
.come-shop span{
  border: 1px solid #999;
  padding: 2px 30px;
  border-radius: 10px;
  background-color: #f6f6f6;
}

</style>