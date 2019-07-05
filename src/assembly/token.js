import request from '@/utils/request'
import storge from '@/assembly/storage'
import qs from 'qs'

// get 获取token 
export function getToken(data) {
  return request({
    url: "login/gettoken.html",
    method: 'get',
    params: {
      uid: storge.getItem("uid"),
      timestamp: Math.floor(+new Date() / 1000),
      ...data
    },
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  })
}

// post 获取token 
export function postToken(data) {
  return request({
    url: "login/gettoken.html",
    method: 'post',
    data: qs.stringify({
      uid: storge.getItem("uid"),
      timestamp: Math.floor(+new Date() / 1000),
      ...data
    }),
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  })
}