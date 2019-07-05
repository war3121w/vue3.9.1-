//七牛专用js  api
import request from '@/utils/request'
import qs from 'qs'

export function getQiniu(data) {
  return request({
    url: 'person/qiniutoken.html',
    method: 'get',
    params: data
  })
}