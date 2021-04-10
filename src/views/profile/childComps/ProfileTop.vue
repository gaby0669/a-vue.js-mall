<template>
  <div class="profile-top">
    <div class="profile-avator">
      <div class='avtor-img'>
        <img src="~assets/images/profile/avatar.svg" alt="">
      </div>
      <div v-if="$store.state.user.online" class="user">
        <img src="~assets/images/profile/vip.svg" alt="">
        <p>{{$store.state.user.username}}</p>
      </div>
      <div v-else class="profile-login">
        <span @click="loginClick">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: 'ProfileTop',
  computed:{
 
  },
  components:{
    user(){
      return $store.state.user
    }
  },
  methods:{
    loginClick(){
      this.$router.push('/login')
    },
  }

}
</script>

<style scoped>
.profile-top{
  height: 200px;
  background-color: var(--color-high-text);
  opacity: .8;
  color: #fff;
  box-shadow: 0 1px 1px #999;
}
.user{
  display: flex;
  line-height: 40px;
  width: 200px;
  position: relative;
  margin-left: 70px;
}
.user p{
  text-align: center;
  padding-left: 10px;
}
.user img{
  width: 40px;
  height: 40px;
  margin-left: 70px;
}
.avtor-img{
  width: 100px;
  height: 100px;
  padding-top: 10px;
  margin: auto;
  
  
}
.avtor-img img{
  width: 100px;
  height: 100px;
}
.profile-login{
  text-align: center;
  padding:10px;
  font-size: 20px;
  padding: 20px;
  
}
.profile-login span {
  border: solid 1px rgb(51, 11, 231);
  border-radius: 5px;
  padding: 5px;
}

</style>