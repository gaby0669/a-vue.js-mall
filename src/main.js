import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

Vue.config.productionTip = false

//Vue实例有$on,$emit等方法，所以可以作为$bus的事件总线
Vue.prototype.$bus = new Vue();

// 安装 自己写的 toast 插件
Vue.use(toast)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
