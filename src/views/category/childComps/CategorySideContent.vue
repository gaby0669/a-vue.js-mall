<template>
  <div class="side-content">
    <category-side-content-item
      v-for="(item,index) in subCategoryList"
      :subCategoryItem='item'
      :key="index"
    />
  </div>
</template>

<script>
import CategorySideContentItem from './CategorySideContentItem'
export default {
  name : 'CategorySideContent',
  components: { CategorySideContentItem },
  props:{
    subCategoryList:{
      type : Array,
      default(){
        return []
      }
    }
  },

}
</script>

<style scoped>
.side-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
}
</style>