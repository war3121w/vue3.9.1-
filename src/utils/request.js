import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'


//创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_APIUrl, // api的base_url
  withCredentials: true,
  // timeout: 5000 // 请求超时时间
})

// 发送请求拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error)
});


//发送请求响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    // 错误的code情况
    if (res.code !== 200) {
      Message({
        message: res.msg || 'error',
        type: 'error',
        duration: 5 * 1000
      })
      // 其他的code 需要单独判断 
      //       //501 token匹配失败，回到登录


      if (res.code == 501) {
        // ??? 需要单独调试一番
        store.dispatch('user/backToLogin').then(() => {
          //location.reload()
        })
      }


      return Promise.reject(res.msg || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    // if (error.response.status == 500) {
    //   location.reload()
    // }
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service



