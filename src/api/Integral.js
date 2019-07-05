//积分审核api
import request from '@/utils/request'
import qs from 'qs'

//积分列表 任务申请 api
export function getApplyTask(data) {
  return request({
    url: 'score/applytask.html',
    method: 'get',
    params: data
  })
}


//积分列表 任务撤销 api
export function getBackoutApply(data) {
  return request({
    url: 'score/backoutapply.html',
    method: 'get',
    params: data
  })
}


//积分批量审核
export function postTaskList(data) {
  return request({
    url: 'score/tasklist.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//积分数据-个人信息数据-api
export function getIntegralAccount(data) {
  return request({
    url: 'score/integralaccount.html',
    method: 'get',
    params: data
  })
}

//积分数据-图表api
export function getIntegralsinglemonthlystatistics(data) {
  return request({
    url: 'score/integralsinglemonthlystatistics.html',
    method: 'get',
    params: data
  })
}

//积分数据-月份api
export function getCurrentMonthIntegral(data) {
  return request({
    url: 'score/currentmonthintegral.html',
    method: 'get',
    params: data
  })
}

//积分数据-表格数据 api
export function postTaskdetails(data) {
  return request({
    url: 'score/taskdetails.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//积分数据-表格操作 api
export function getBackOutApply(data) {
  return request({
    url: 'score/backoutapply.html',
    method: 'get',
    params: data
  })
}

//积分排名-元老积分榜 api
export function getScoreRankPersonal(data) {
  return request({
    url: 'score/scorerankpersonal.html',
    method: 'get',
    params: data
  })
}


//积分排名-日均积分榜 api
export function getScoreRankDaily(data) {
  return request({
    url: 'score/scorerankdaily.html',
    method: 'get',
    params: data
  })
}

//积分排名-部门排行榜 api
export function getScoreRankDep(data) {
  return request({
    url: 'score/scorerankdep.html',
    method: 'get',
    params: data
  })
}

//积分审核-任务通过 api
export function postTaskPass(data) {
  return request({
    url: 'score/taskpass.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//积分列表-批量通过 api
export function taskbatchpass(data) {
  return request({
    url: 'score/taskbatchpass.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//积分列表-驳回 api
export function postScoreReject(data) {
  return request({
    url: 'score/scorereject.html',
    method: 'post',
    data: qs.stringify(data)
  })
}



