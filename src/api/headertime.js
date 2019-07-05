//OA倒计时转正api
import request from '@/utils/request'
import qs from 'qs'

export function get(data) {
  return request({
    url: '',
    method: 'get',
    params: data
  })
}

export function post(data) {
  return request({
    url: '',
    method: 'post',
    data: qs.stringify(data)
  })
}


//获取转正时间状态与时间戳
export function getTime(data) {
  return request({
    url: 'person/countdown.html',
    method: 'get',
    params: data
  })
}