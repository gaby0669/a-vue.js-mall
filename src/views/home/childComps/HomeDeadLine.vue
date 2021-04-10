<template>
  <div class="dead-line" @click="activeClick">
      <p>为了庆祝李云龙店铺开业十周年，全场 6 折！！！</p>
      <div>活动截止时间为：</div>
    <date class="home-date"/>
  </div>
</template>

<script>
import Date from 'components/common/date/Date.vue'

export default {
  components: {
    Date
  },
  methods:{
    activeClick(){
      this.$router.push('/category')
    }
  }
}
</script>

<style scoped>
.dead-line{
  position: relative;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  margin-bottom: 80px;
  padding: 3px;
}
.home-date{
  position: absolute;
  right: 15px;
  top: 45px;
  font-size: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .8);
}
</style>