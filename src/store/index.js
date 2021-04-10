import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [],
    user:{
      username: localStorage.name,
      userpassword:localStorage.password,
      usermail : localStorage.mail,
      usertel : localStorage.tel,
      online : localStorage.online
    }
  },
  mutations: {
    //mutations 唯一的目的就是修改state中的状态
    // mutations中的每个办法尽可能完成的事件比较单一
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    },
    changeCheck(state,payload){
      payload.checked = !payload.checked
    },
    changeonline(state){
      state.user.online = false
    }

  },
  actions: {
    addCart(content,payload){
      return new Promise((resolve,reject) =>{
        //payload 新添加的商品
      // 查找之前的数组中是否有这商品
      let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct){
        // oldProduct.count++
        content.commit('addCounter',oldProduct)
        resolve('成功添加到购物车中该商品数量+1')
      }else{
        payload.count = 1
        // content.state.cartList.push(payload)
        // 默认商品选中
        payload.checked = true
        content.commit('addToCart',payload)
        resolve('成功添加到购物车')
      }
      })
    }
  },
  modules: {
  }
})
