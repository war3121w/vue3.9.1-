//发布/编辑绩效api
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

//获取绩效类型列表types   api
export function getWorkType(data) {
  return request({
    url: 'performance/worktype.html',
    method: 'get',
    params: data
  })
}

//发布绩效  api
export function postWorkAdd(data) {
  return request({
    url: 'performance/workadd.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//编辑绩效  api
export function postWorkEdit(data) {
  return request({
    url: 'performance/workedit.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//获取绩效列表数据  api
export function getWorkDetails(data) {
  return request({
    url: 'performance/workdetails.html',
    method: 'get',
    params: data
  })
}

//获取绩效名字数据  api
export function getSubordinate(data) {
  return request({
    url: 'performance/getsubordinate.html',
    method: 'get',
    params: data
  })
}
