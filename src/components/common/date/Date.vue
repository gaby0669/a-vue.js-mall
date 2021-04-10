<template>
  <div class="Date">
        <p class="date">{{d}}天</p>
        <p>:</p>
        <p class="date">{{h}}时</p>
        <p>:</p>
        <p class="date">{{m}}分</p>
        <p>:</p>
        <p class="date">{{s}}秒</p>
  </div>
</template>
<script>
export default {
  name: 'Date',
  data() {
    return {
      d: '',
      h: '',
      m: '',
      s: '',
    }
  },
  created() {
    this.countTime()
  },
  methods: {
    countTime() {
      //获取当前时间
      var date = new Date()
      var now = date.getTime()
      //设置截止时间
      var endDate = new Date('2021-7-1 0:0:0')
      var end = endDate.getTime()
      //时间差
      var leftTime = end - now
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)//天数我没用到，暂且写上
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.m = Math.floor((leftTime / 1000 / 60) % 60)
        this.s = Math.floor((leftTime / 1000) % 60)
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000)
    },
  },
}
</script>
<style scoped>
.Date{
  display: flex;
  width: 200px;
  background-color: var(--color-high-text);
  color: #fff;
  justify-content: center;
}
</style>