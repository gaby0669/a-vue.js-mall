<template>
  <div id="shop-cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


import Scroll from 'components/common/scroll/Scroll'



export default {
  name : 'ShopCart',
  components: { 
    NavBar,
    CartList,
    CartBottomBar,

    Scroll
   },
  computed:{
    cartLength(){
      return this.$store.state.cartList.length
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#shop-cart{
  height: 100vh;
  position: relative;
  background-color: #fff;
}
.cart-nav{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
  
}
.content{
  position: absolute;
  right: 0;
  bottom: 89px;
  left: 0;
  top: 44px;
  overflow: hidden;

}

</style>