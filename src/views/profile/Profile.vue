<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <profile-top/>
    <profile-middle/>
    <ul class="profile-bottom" >
      <li>我的客服</li>
      <li>我的地址</li>
      <li>帮助中心</li>
      <li >设置</li>
      <li @click="signUp">退出登录</li>


    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import ProfileTop from './childComps/ProfileTop.vue'
import ProfileMiddle from './childComps/ProfileMiddle.vue'


export default {
  name : 
    'Profile',
  components: { 
    NavBar,
    ProfileTop,
    ProfileMiddle
   },
   methods:{
     signUp(){
      localStorage.online = false
      
      // console.log('---------');
      // console.log(localStorage.online);
      // console.log(this.$store.state.user.online);
      this.$store.commit("changeonline")
      
     },
     ulClick(){

     }
   }

}
</script>

<style scoped>
#profile{
  height: 100%;
}
.profile-nav{
  background-color: var(--color-tint);
  font-size: 20px;
  color: #fff;
}
.logAndRegiter{
  background-color: aquamarine;
  height: 40px;
  width: 100px;
  line-height: 40px;
  margin-left: 20px;
  text-align: center;
}
.show img{
  width: 30px;
  height: 30px;
}
.profile-bottom{
  padding: 20px;
}
.profile-bottom li{
  margin-bottom: 10px;
  line-height: 30px;
  margin-left: 20px;
  border-bottom: 2px solid #f7f7f7; 
}

</style>