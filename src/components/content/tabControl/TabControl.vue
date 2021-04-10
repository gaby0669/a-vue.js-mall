<template>
  <div class="tab-control">
    <div 
      class="tab-control-item"
      v-for="(item,index) in titles" 
      @click="itemClick(index)"
      :key="index">
      <span :class="{active: index == currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'TbaControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props : {
    titles: {
      type: Array,
      default(){
        return[]
      }
    },
  },
  methods : {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  line-height: 40px;
  font-size: 18px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span {
  padding: 5px
}
.active{
  color: orangered;
  border-bottom: 3px solid orangered;
}

</style>