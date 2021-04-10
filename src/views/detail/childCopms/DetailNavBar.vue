<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="titile">
        <div v-for="(item,index) in titiles" 
            class="title-item"
            :class="{active:currentIndex ==index}"
            @click="itemClick(index)"
            :key="index">
        {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name : 'DetailNavBar',
  data(){
    return{
      titiles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  components:{
    NavBar
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('itemClickEvent',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titile{
  display: flex;
}
.title-item{
  flex: 1;
  
}
.back{
  margin-top: 6px;
}
.active{
  color: orangered;
}
</style>