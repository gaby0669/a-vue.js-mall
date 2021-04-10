<template>
  <div class="profile-mdiile">
    <div class="profile-cart" @click="cartClick">
      <img src="~assets/images/profile/cart.svg" alt="">
      <p>购物车</p>
    </div>
    <div class="profile-cart" @click="goShopping">
      <img src="~assets/images/profile/shopping.svg" alt="">
      <p>去购物</p>
    </div>
    <div class="profile-cart">
      <img src="~assets/images/profile/integral.svg" alt="">
      <p>积分</p>
    </div>
    <div class="profile-cart">
      <img src="~assets/images/profile/information.svg" alt="">
      <p>消息</p>
    </div>
    <div class="profile-cart">
      <img src="~assets/images/profile/more.svg" alt="">
      <p>更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMiddle',
  methods:{
    cartClick(){
      this.$router.push('/shopcart')
    },
    goShopping(){
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.profile-mdiile{
  display: flex;
  height: 100px;
  border-bottom: 8px solid #e6e6e6;
}
.profile-cart{
  height: 50px;
  width: 100px;
  font-size: 14px;
  text-align: center;
}
.profile-cart img{
  margin-top: 8px;
  height: 50px
}

</style>