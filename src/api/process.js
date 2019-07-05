//流程管理api
import request from '@/utils/request'
import qs from 'qs'

export function get() {
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

//获取七牛的token地址
export function getQiniu(data) {
  return request({
    url: 'person/qiniutoken.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程发起-我的发起表格请求
export function ProcessFlowApplyList(data) {
  return request({
    url: 'process/flowapplylist.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程发起-我的发起 --  查看详情请求
export function ProcessFlowApplyDetail(data) {
  return request({
    url: 'process/flowapplydetail.html',
    method: 'get',
    params: data
  })
}

//根据类型获取流程类型
export function ProcessGetProcessType(data) {
  return request({
    url: 'process/getprocesstype.html',
    method: 'get',
    params: data
  })
}

//根据类型获取流程类型new
export function getDepScoreProcessConfig(data) {
  return request({
    url: 'process/getdepscoreprocessconfig.html',
    method: 'get',
    params: data
  })
}


//获取流程管理-流程发起-我的发起 --  申请请假
export function ProcessLeaveApply(data) {
  return request({
    url: 'process/leaveapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程发起-我的发起 --  申请加班
export function ProcessOvertimeApply(data) {
  return request({
    url: 'process/overtimeapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程发起-我的发起 --  申请加班-获取积分
export function ProcessGetProcessConfig(data) {
  return request({
    url: 'process/getprocessconfig.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程发起-我的发起 转正默认数据渲染请求
export function ProcessRegularInfo(data) {
  return request({
    url: 'process/regularinfo.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程发起-我的发起 --  申请转正
export function ProcessRegularApply(data) {
  return request({
    url: 'process/regularapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//申请报销-银行卡列表
export function getUserBankCard(data) {
  return request({
    url: 'fund/userbankcard.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程发起-我的发起 --  申请报销
export function ProcessRefundApply(data) {
  return request({
    url: 'process/refundapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程发起-我的发起 --  申请离职
export function ProcessQuitApply(data) {
  return request({
    url: 'process/quitapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程发起-我的发起 --  申请绩效
export function ProcessWorkplanApply(data) {
  return request({
    url: 'process/workplanapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程审批-待我审批的
export function ProcessFlowWaitConfirm(data) {
  return request({
    url: 'process/flowwaitconfirm.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程审批-我已审批的
export function ProcessFlowhasConfirm(data) {
  return request({
    url: 'process/flowhasconfirm.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程审批  通过
export function ProcessFlowConfirm(data) {
  return request({
    url: 'process/flowconfirm.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//获取流程管理-流程审批  批量通过
export function ProcessFlowBatchConfirm(data) {
  return request({
    url: 'process/flowbatchconfirm.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程审批  驳回
export function ProcessFlowreFuse(data) {
  return request({
    url: 'process/flowrefuse.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程审批  批量驳回
export function ProcessFlowBatchRefuse(data) {
  return request({
    url: 'process/flowbatchrefuse.html',
    method: 'post',
    data: qs.stringify(data)
  })
}



//获取流程管理-流程审批  撤销申请
export function ProcessFlowApplyCancel(data) {
  return request({
    url: 'process/flowapplycancel.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//获取流程管理-流程发起 -晋升申请渲染 
export function ProcessPromotionInfo(data) {
  return request({
    url: 'process/promotioninfo.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程发起 -晋升申请渲染 
export function ProcessPromotionApply(data) {
  return request({
    url: 'process/promotionapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//获取流程管理-流程发起 -获取付款申请公司信息
export function getCompanyInfo(data) {
  return request({
    url: 'process/companyinfo.html',
    method: 'get',
    params: data
  })
}

//获取流程管理-流程发起 - 付款提交
export function postPayApply(data) {
  return request({
    url: 'process/payapply.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//获取异动申请的岗位
export function getPostList(data) {
  return request({
    url: 'person/postlist.html',
    method: 'get',
    params: data
  })
}






