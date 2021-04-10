<template>
  <div id="detail-bottom-bar">
    <div class="bottom-left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addEvent");
    },
  },
};
</script>
<style scoped>
#detail-bottom-bar{
  height: 49px;
  width: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .3);
}
.bottom-left {
  display: flex;
  flex: 1;
  width: 50%;
}
.bottom-left > div {
  flex: 1;
  border-right: 1px  solid rgba(128, 128, 128, 0.2);
}
.bottom-left .icon {
  display: block;
  background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
  width: 20px;
  height: 20px;
  margin: 5px auto;
}
.service .icon {
  background-position: 0 -50px;
}
.shop .icon {
  background-position: 0 -90px;
}
.bottom-right {
  display: flex;
  flex: 1;
}
.bottom-right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>




