<template>
  <div class="side-bar">
    <div 
      class="side-content"
      v-for="(item,index) in categoryList" 
      @click="itemClick(index)"
      :key="index"
      :class="{active: index===currentIndex}"
    >
    {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategorySideBar',
  props:{
    categoryList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex : 0,
      maitKey: ''
    }
  },
  methods:{
    // 点击事件
    itemClick(index){
      // console.log('----------');
      this.currentIndex = index
      this.maitKey = this.categoryList[index].maitKey
      // console.log(this.maitKey);
      this.$emit('getMaitKey',this.maitKey)
    }
  }
}
</script>

<style scoped>
.side-bar{
  width: 100px;
}
.side-content{
  text-align: center;
  padding-bottom: 10px;
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
}
.active{
  background-color: #fff;
  border-left: 5px solid skyblue;
}
</style>