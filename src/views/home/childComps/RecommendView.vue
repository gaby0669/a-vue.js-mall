<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'RecommendView',
  props: {
    recommends: {
      typeof:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  margin-top: 10px;
  width: 100%;
  box-shadow: 1px 1px 5px rgb(0, 183, 255);
  
}
.recommend-item{
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 10px solid #ececec;
  text-align: center;
  
}
.recommend-item img{
  width: 80px;
}
</style>