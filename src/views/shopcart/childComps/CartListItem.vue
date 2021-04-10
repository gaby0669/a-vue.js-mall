<template>
  <div class="cart-list-item">
    <cart-check-buttom 
      :isCheck='product.checked'
      @click.native="checkClick"
    />
    <div class="goods-img">
      <img :src="product.img" alt="goods-img" />
    </div>
    <div class="goods-info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="price-num">
        <div class="price">￥{{ product.price }}</div>
        <div class="num">X{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckButtom from './CartCheckButtom';
export default {
  name: "CartListItem",
  components:{
    CartCheckButtom
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    checkClick(){
      this.$store.commit("changeCheck",this.product)
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(100, 100, 100, .2);
}
.goods-img {
  padding: 5px;
}
.goods-img img {
  width: 80px;
  height: 110px;
  border-radius: 5px;
}

.goods-info {
  width: 65%;
  overflow: hidden;
  font-size: 17px;
  color: #333;
}
.goods-info .title, .goods-info .desc {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .desc {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
.goods-info .price-num {
  padding: 8px  5px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.goods-info .price-num .price {
  color: var(--color-high-text);
  font-weight: bold;
}
</style>