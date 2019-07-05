//OA绩效模块api
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

//绩效大厅年份列表数据 api
export function postWorkYearPlan(data) {
  return request({
    url: 'performance/workyearplan.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//绩效大厅评审-年份列表数据 api
export function postWorkYearPlanLeader(data) {
  return request({
    url: 'performance/workyearplanleader.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//绩效大厅-工作明细-数据 api
export function postWorkList(data) {
  return request({
    url: 'performance/worklist.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//个人绩效大厅列表
export function postWorkListPersonal(data) {
  return request({
    url: 'performance/worklistpersonal.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//绩效评审列表
export function postWorkListLeader(data) {
  return request({
    url: 'performance/worklistleader.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//绩效大厅-工作管理-list api
export function getWorkDetails(data) {
  return request({
    url: 'performance/workdetails.html',
    method: 'get',
    params: data
  })
}

//绩效大厅-工作管理-获取分数状态2 api
export function getRecommendGrade(data) {
  return request({
    url: 'performance/recommendgrade.html',
    method: 'get',
    params: data
  })
}

//绩效大厅-工作管理-获取分数状态4 api
export function getRecommendGrade4(data) {
  return request({
    url: 'performance/getrecommendgrade.html',
    method: 'get',
    params: data
  })
}

//绩效大厅-工作管理-跳转第三步骤-完成工作提交 api
export function postUserWorkComplete(data) {
  return request({
    url: 'performance/userworkcomplete.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//绩效大厅-工作管理-任务领取 api
export function postGetWork(data) {
  return request({
    url: 'performance/userworkreceive.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//绩效-个人数据-柱状图 api
export function getGradeTree(data) {
  return request({
    url: 'performance/gradetree.html',
    method: 'get',
    params: data
  })
}


//绩效-个人数据-个人信息 api
export function getPersonTrace(data) {
  return request({
    url: 'performance/persontrace.html',
    method: 'get',
    params: data
  })
}

//绩效-个人数据-table api
export function postPersonList(data) {
  return request({
    url: 'performance/personlist.html',
    method: 'post',
    data: qs.stringify(data)
  })
}



//绩效排名 -个人绩效排行榜  api
export function getWorkPersonRank(data) {
  return request({
    url: 'performance/workpersonrank.html',
    method: 'get',
    params: data
  })
}

//绩效排名 -部门绩效排行榜  api
export function getWorkDepRank(data) {
  return request({
    url: 'performance/workdeprank.html',
    method: 'get',
    params: data
  })
}


//部门数据-部门信息数据  api
export function getDepInfo(data) {
  return request({
    url: 'performance/depinfo.html',
    method: 'get',
    params: data
  })
}

//部门数据-图表  api
export function getDepMonthMap(data) {
  return request({
    url: 'performance/depmonthmap.html',
    method: 'get',
    params: data
  })
}

//部门数据-table api
export function postDepStatisticInfo(data) {
  return request({
    url: 'performance/depstatisticinfo.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//部门数据-查看详情列表 api
export function postDepListDetails(data) {
  return request({
    url: 'performance/deplistdetails.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//驳回 api
export function postRejectWork(data) {
  return request({
    url: 'performance/rejectwork.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//绩效排名 部门列表获取
export function getDepList(data) {
  return request({
    url: 'person/deplist.html',
    method: 'get',
    params: data
  })
}


//获取OA配置
export function getConfig(data) {
  return request({
    url: 'fund/getconfig.html',
    method: 'get',
    params: data
  })
}



