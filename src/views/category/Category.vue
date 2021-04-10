<template>
  <div id="category">
    <nav-bar class="category-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
      <div class="category-content">
        <div class="category-side-bar">
          <category-side-bar
            :categoryList='categoryList'
            @getMaitKey='getMaitKey'
          />
      </div>
      <scroll class="category-right" ref="scroll">
        <category-side-content :subCategoryList='subCategoryList' />
      </scroll>
      </div>
    
  </div>  
</template>

<script>

import NavBar from 'components/common/navbar/NavBar';

import CategorySideBar from './childComps/CategorySideBar'
import CategorySideContent from './childComps/CategorySideContent'

import Scroll from 'components/common/scroll/Scroll'
import { getAllCategory, getSubCategory } from "network/category";

import {debounce} from 'common/untils';
export default {
  name : 'Category',
  components:{
    NavBar,
    CategorySideBar,
    CategorySideContent,

    Scroll
  },
  data(){
    return{
      categoryList:[],
      maitKey:'',
      subCategoryMaitKey:'',
      subCategoryList:[]
    }
  },
  created() {
    /**
     * 网络请求
     */
    // 1.获取左侧边栏数据
    getAllCategory()
      .then((res) => {
        // console.log(res);
        // console.log(res.data.category.list);
        // 左侧边栏数据
        this.categoryList = res.data.category.list;
        this.subCategoryMaitKey = res.data.category.list[0].maitKey
        return this.subCategoryMaitKey
      })
      // 获取右侧默认的数据
      .then((maitKey) => {
        this.getSubCategory(maitKey);
      })
  },
  mounted(){
        /**
     * 1.监听事件总线中分类图片全部加载完成
     * 运用函数防抖动
     */
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("categoryImgLoadEvent", () => {
      refresh()
    })
  },
  methods:{
    getMaitKey(maitKey){     
      // console.log(index);
      // this.maitKey = this.categoryList[index].maitKey
      this.maitKey = maitKey
      // console.log(this.maitKey);
      this.getSubCategory(this.maitKey)
    },
    getSubCategory(maitKey){
      getSubCategory(maitKey).then(res =>{
        // 获取右侧数据
        // console.log(res);
        this.subCategoryList = res.data.list
        
      })
    }
    
  }
  
}
</script>

<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.category-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 20px;
}
.category-side-bar {
  width: 100px;
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 100%;
  background-color: #e6e6e6;
}
category-content{
  height: 100%;
}
.category-right {
  position: fixed;
  left: 100px;
  right: 0;
  top: 44px;
  bottom: 49px;
  width: calc(100% - 100px);
  overflow: hidden;
}

</style>