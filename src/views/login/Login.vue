<template>
  <div id="login">
    <div class="login-back" @click="backClick">
      <img src="~assets/images/common/back.svg" alt="">
    </div>
    <div class="container">
      <form action="">
        <h1>Login</h1>
        <div class="form">
          <div class="item-username">
            <label>用户名：</label>
            <input
              type="text"
              name="username"
              v-model.trim="name"
              placeholder="请输入用户名"
            />
            <!-- v-model把输入的值传输给name变量 -->
          </div>
          <div class="item-password">
            <label>密码：</label>
            <input
              type="password"
              name="password"
              v-model.trim="password"
              placeholder="请输入密码"
            />
          </div>
          <div class="keep" @click="handlesave">
            <input
                     
              type="radio"
              
            /><!-- 点击选中 -->
            <label for="yes">保持登录状态</label>
          </div>
        </div>
      </form>
      <button type="submit" @click.prevent="handlelogin">登录</button>
      <button @click.prevent="handleregister">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "", //姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      password: "", //密码
      online: false, //false为不保存登录
    };
  },
  methods: {
    backClick(){
      this.$router.push('/home')
    },
    handlelogin() {
      // console.log(localStorage);
      if (this.name === localStorage["name"] &&
          this.password === localStorage["password"]) {
        alert('登录成功！')
        this.$router.replace("/home"); //如果输入的名字以及密码正确路由跳转至个人页面
      } else if (this.name === "") {
        //名字为空
        alert("用户名不为空");
      } else if (this.password === "") {
        //密码为空
        alert("密码不为空");
      } else {
        alert("账号不存在，请注册后登录"); 
      }
       window.location.reload()
      
    },
    handleregister() {
      this.$router.replace("/register"); //点击注册按钮，跳转至注册页面
    },
    //点击保持登录状态触发handlesave
    handlesave() {
      this.online = true; //修改登录状态为true
      localStorage.setItem("online", this.online);
      console.log(localStorage.online);
      console.log(localStorage);
     
    },
  },
};
</script>

<style scoped>
#login {
  position: relative;
  width: 100%;
  height: 667px;
  background: url("~assets/images/login/background.jpg");
  background-size: contain;
  z-index: 10;
}
.login-back{
  background-color: #fff;
  opacity: .6;
  width: 60px;
  padding: 10px;
  border: 1px solid rosybrown;
}

.container {
  width: 100%;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  opacity: 0.8;
  text-align: center;
  font-size: 20px;
  border-radius: 20px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.9);
}
.item-username{

  margin-top: 35px;
  padding-right: 20px;
  margin-bottom: 20px;


}
/* 输入框 */
input {
  border: solid 1px #999;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
}
.keep {
  padding: 10px 0;
  font-size: 18px;
}
.keep input{
  width: 15px;
  height: 15px;
}
button {
  height: 33px;
  width: 100px;
  background: rgba(35, 19, 252, 0.45);
  border-radius: 10px;
  margin: 0 20px;
  margin-top: 20px;
}
</style>