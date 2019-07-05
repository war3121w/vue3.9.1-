//OA财务管理 api
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

//资金明细 api
export function getFundDetailList(data) {
  return request({
    url: 'fund/funddetaillist.html',
    method: 'get',
    params: data
  })
}


//申请提现列表 api
export function getWithdrawApplyList(data) {
  return request({
    url: 'fund/withdrawapplylist.html',
    method: 'get',
    params: data
  })
}


//提现接口
export function postWithdrawApplySubmit(data) {
  return request({
    url: 'fund/withdrawapplysubmit.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//提现提示接口
export function getAllConfig(data) {
  return request({
    url: 'fund/getallconfig.html',
    method: 'get',
    params: data
  })
}


//我的罚单-申诉
export function postTicketallege(data) {
  return request({
    url: 'fund/ticketallege.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//我的罚单提交
export function getDealticket(data) {
  return request({
    url: 'fund/dealticket.html',
    method: 'get',
    params: data
  })
}


//我的罚单表格
export function postTicketList(data) {
  return request({
    url: 'fund/ticketlist.html',
    method: 'post',
    data: qs.stringify(data)
  })
}



//绑定银行卡列表api
export function getBankCardList(data) {
  return request({
    url: 'fund/bankcardlist.html',
    method: 'get',
    params: data
  })
}



//绑定银行卡  绑定 api
export function postbankCardBind(data) {
  return request({
    url: 'fund/bankcardbind.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//绑定银行卡  获取短消息api
export function getbindCode(data) {
  return request({
    url: 'fund/getbindcode.html',
    method: 'get',
    params: data
  })
}

//绑定银行卡  删除银行卡api
export function getDelBackCard(data) {
  return request({
    url: 'fund/delbackcard.html',
    method: 'get',
    params: data
  })
}


//查询积分账户
export function getNameInter(data) {
  return request({
    url: 'person/checkaccount.html',
    method: 'get',
    params: data
  })
}

//积分短信验证获取
export function postSend(data) {
  return request({
    url: 'score/sendsms.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//资金短信验证获取
export function postSendSms(data) {
  return request({
    url: 'fund/sendsms.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//积分转账提交
export function postScoreTransfer(data) {
  return request({
    url: 'score/scoretransfer.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//资金转账提交
export function postFundTransfer(data) {
  return request({
    url: 'fund/fundtransfer.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//积分转账记录
export function getScoretransFerlist(data) {
  return request({
    url: 'score/scoretransferlist.html',
    method: 'get',
    params: data
  })
}

//资金转账记录
export function getFundTransFerlist(data) {
  return request({
    url: 'fund/fundtransferlist.html',
    method: 'get',
    params: data
  })
}

