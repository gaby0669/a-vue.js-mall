import Toast from './Toast'


const obj ={};

obj.install = function(Vue){
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2.new的方式 根据组件构造器 创建一个组件对象
  const toast = new toastConstructor()
  //3将组件对象手动挂载到某一个dom元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是div 将模板放入dom元素上
  document.body.appendChild(toast.$el)
  //5.放入原型上
  Vue.prototype.$toast = toast
}


export default obj