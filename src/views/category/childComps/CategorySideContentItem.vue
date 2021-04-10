<template>
  <div class="category-side-content-item">
    <img :src="subCategoryItem.image" alt="" @load="imgLoad" >
    <p>{{subCategoryItem.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'CategorySideContentItem',
  props:{
    subCategoryItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    //监听图片是否加载完成
    imgLoad(){
      this.$bus.$emit("categoryImgLoadEvent")
    }
  }
}
</script>

<style scoped>
.category-side-content-item {
    width: 50%;
    flex: 1;
    text-align: center;
}
.category-side-content-item img{
    width: 100px; 
}
</style>