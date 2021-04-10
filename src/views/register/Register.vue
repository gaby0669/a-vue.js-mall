<template>
  <div id="register">
    <div class="register-back" @click="backClick">
      <img src="~assets/images/common/back.svg" alt="">
    </div>
    <div class="content">  
      <h1>Register</h1>
      <div class="form-username">
        <label>用户名：</label>
        <input type="text" v-model.trim="name" />
      </div>
      <div class="form-password">
        <label>密码：</label>
        <input type="password" v-model.trim="password" />
      </div>
      <div class="form-mail">
        <label>邮箱：</label><input type="email" v-model.trim="mail"/>
      </div>
      <div class="form-phone">
        <label>手机号：</label><input type="tel" v-model.trim="tel"/>
      </div>
      <button @click.prevent="handlefinish">提交</button>
    </div> 
  </div>
</template>

<script>
export default {
  naem: "Register",
  data(){
    return{
      name:"",
      password:"",
      mail:"",
      tel:""
    };
  },
  methods:{
    backClick(){
      this.$router.push('/login')
    },
  //点击完成按钮触发handlefinish
    handlefinish(){
      if(localStorage['name']===this.name){
        alert("用户名已存在");
      }else if(this.name===''){
        alert("用户名不能为空");
      }else{
        //将新用户信息存储到localStorage
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        localStorage.setItem('mail',this.mail);
        localStorage.setItem('tel',this.tel);
        alert("注册成功");
        this.$router.replace('/Login');//完成注册后跳转至登录页面
      }
    }
  }
};
</script>

<style scoped>
#register{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: url('~assets/images/login/james.jpg');
  background-size: cover;
}
.register-back{
  background-color: #fff;
  opacity: .6;
  width: 60px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid rosybrown;
}
.content{
  margin-top: 100px;
  font-size: 20px;
  background-color: #fff;
  opacity: .8;
  text-align: center;
}
.form-username{
  margin-bottom: 10px;
}
.form-password{
  margin-bottom: 10px;
  margin-left: 20px;
}
.form-mail{
  margin-bottom: 10px;
  margin-left: 20px;
}

label{
  width: 100px;
}
input,textarea{
  border: solid 1px #4e5ef3;
  width: 200px;
  height: 20px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.45);
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  outline: none;
}

</style>