<template>
  <div class="cart-check-buttom" :class="{check : isCheck}">
    <img src="~assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  naem : 'CartCheckButtom',
  data(){
    return{
    }
  },
  props:{
    isCheck:{
      type : Boolean,
      default: false
    }
  }
  
} 
</script>

<style scoped>
.cart-check-buttom{

  background-color:#fff;
  border: 2px solid #999;
  border-radius: 50%;
}
.check{
  background-color: red;
  border:2px solid red;
}
</style>