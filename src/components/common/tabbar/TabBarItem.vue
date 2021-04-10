<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeSyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: true,
    }
  },
  computed : {
    isActive() {
      // return this.path == this.$route.path  // 不建议用 == ，应该用indeOf，因为后面的路径会很复杂 例如 /home/aaa，用==匹配不到
      return this.$route.path .indexOf(this.path) !==-1
    },
    activeSyle(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor : {
      type: String,
      default : "red"
    }
  },
  methods: {
    itemClick() {
      //   console.log(this.$router);
      //   console.log(this.path);
      this.$router.push(this.path);
      // console.log("-------");
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-bottom: 2px;
 
  
  vertical-align: middle;
}
</style>
