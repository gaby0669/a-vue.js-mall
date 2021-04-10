<template>
  <div class="cart-bottom-bar">
    <div class="checkbox">
    <cart-check-buttom 
      class="checkbuttom"
      @click.native='checkClick'
      :isCheck= 'isSelectAll' />
    <span>全选</span>
    </div>
    <div class="sumPrice">
      <span>合计￥{{TotalPrice}}</span>
    </div>
    <div class="calculate" >
      <span>去结算（{{checkedLength}}）</span> 
    </div>
   
  </div>
</template>

<script>
import CartCheckButtom from './CartCheckButtom'

export default {
  name : 'CartBottomBar',
  components: { CartCheckButtom },
  computed:{
    TotalPrice(){
      return this.sumPrice().toFixed(2)
    },
    checkedLength(){
      return this.$store.state.cartList.filter(item =>item.checked).length
    },
    // 全选
    isSelectAll(){
      if(this.$store.state.cartList.length===0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods:{
    sumPrice(){
      return (this.$store.state.cartList).filter(item => {
        return item.checked
      }).reduce((preValue,item) =>{
        return preValue + item.price * item.count
      },0)
    },
    checkClick(){
      if(this.isSelectAll){
        // 全部选中
        this.$store.state.cartList.forEach(item => { item.checked = false});
      }else{
        // 部分选中或者全部不选中
        this.$store.state.cartList.forEach(item => { item.checked = true});
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom-bar{
  position: fixed;
  display: flex;
  height: 40px;
  line-height: 40px;
  right: 0;
  left: 0;
  bottom: 49px;
  background-color: #e9e9e9;
}
.checkbox{
  display: flex;
  align-items: center;
  width: 60px;
  margin-right: 20px;
}
.checkbuttom{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.sumPrice{
  flex: auto;
}
.calculate{
  width: 130px;
  color: #fff;
  text-align: center;
  background-color: rgb(255, 115, 0);
}
</style>