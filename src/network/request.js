import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL : "http://152.136.185.210:7878/api/m5" ,
    timeout:10000
  })
  // 2.axios的拦截器
  //2.1 axios请求拦截
  instance.interceptors.request.use(config => {
    // 一定要返回
    return config
  },err =>{
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })
  return instance(config)
}