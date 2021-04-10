<template>
  <div v-if="Object.keys(goods).length !==0" class="detail-base-info">
    <span class="title">{{goods.title}}</span>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="(item,index) in goods.columns" :key="index" >{{item}}</span>
    </div>
    <div class="services">
      <span class="servicesItem" v-for="index in goods.services.length-1" :key="index">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBaseInfo',
  props:{
    goods: {
      type :Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-base-info{
  margin-top: 10px;
  padding: 0 5px;
  border-bottom: 5px solid skyblue;
}
.title{
  font-size: 18px;
  font-weight:bold;
}
.price{
  margin-top: 10px;
  padding-bottom: 20px;
}
.new-price{
  color: rgb(248, 40, 40);
  font-size: 25px;
}
.old-price{
  text-decoration: line-through grey;
  padding-left: 10px;
  margin-right: 10px;
}
.discount{
  padding: 2px 6px ;
  font-size: 14px;
  color: white;
  background-color: hotpink;
  border-radius: 7px;
  }
.columns{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(240, 236, 236);
  }
.services{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;

}
.servicesItem img{
    width: 12px;
    height: 12px;
  }
.servicesItem{
  font-size: 16px;
  color: gray;
  
}
</style>