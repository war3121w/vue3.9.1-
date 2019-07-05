//OA业绩管理 api
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


//报单 提交  api
export function postSubmitForm(data) {
  return request({
    url: 'reward/submitform.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//报单收益api
export function getFormcalcincome(data) {
  return request({
    url: 'reward/formcalcincome.html',
    method: 'get',
    params: data
  })
}



//报单团队信息 api
export function getTeamInfo(data) {
  return request({
    url: 'team/teaminfo.html',
    method: 'get',
    params: data
  })
}

//报单图表 api
export function getFormMonthlyStats(data) {
  return request({
    url: 'reward/formmonthlystats.html',
    method: 'get',
    params: data
  })
}

//报单下拉列表 api
export function getProductList(data) {
  return request({
    url: 'reward/productlist.html',
    method: 'get',
    params: data
  })
}


//报单详情列表 api
export function getFormDetailList(data) {
  return request({
    url: 'reward/formdetaillist.html',
    method: 'get',
    params: data
  })
}



//团队组织架构 api
export function getOrganization(data) {
  return request({
    url: 'team/organization.html',
    method: 'get',
    params: data
  })
}

//奖励一报单奖金 api
export function getFormformstats(data) {
  return request({
    url: 'reward/formformstats.html',
    method: 'get',
    params: data
  })
}

//奖励二分红奖金 api
export function getFormbonusstats(data) {
  return request({
    url: 'reward/formbonusstats.html',
    method: 'get',
    params: data
  })
}

//奖励三领导奖金 api
export function getFormleaderstats(data) {
  return request({
    url: 'reward/formleaderstats.html',
    method: 'get',
    params: data
  })
}


//报单审批列表 api
export function getFormlist(data) {
  return request({
    url: 'reward/formlist.html',
    method: 'get',
    params: data
  })
}



//批量通过列表 api
export function postFormbatchconfirm(data) {
  return request({
    url: 'reward/formbatchconfirm.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//通过列表 api
export function postFormconfirm(data) {
  return request({
    url: 'reward/formconfirm.html',
    method: 'post',
    data: qs.stringify(data)
  })
}



//批量驳回列表 api
export function postFormbatchrefuse(data) {
  return request({
    url: 'reward/formbatchrefuse.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//驳回列表 api
export function postFormrefuse(data) {
  return request({
    url: 'reward/formrefuse.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//团队删除成员 api
export function postRemoveMember(data) {
  return request({
    url: 'team/removemember.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//团队备注修改 api
export function postEditMemReamrk(data) {
  return request({
    url: 'team/editmemreamrk.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//团队添加成员 api
export function postAddMember(data) {
  return request({
    url: 'team/addmember.html',
    method: 'post',
    data: qs.stringify(data)
  })
}


//团队名编辑 api
export function postEditName(data) {
  return request({
    url: 'team/editname.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//团队添加 api
export function postAddTeam(data) {
  return request({
    url: 'team/addteam.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//领导个人列表信息请求
export function getTeamLeader(data) {
  return request({
    url: 'team/teamleader.html',
    method: 'get',
    params: data
  })
}


//领导下属团队成员列表请求
export function postMembersList(data) {
  return request({
    url: 'team/memberslist.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//左侧团队列表
export function getMyTeamList(data) {
  return request({
    url: 'team/myteamlist.html',
    method: 'get',
    params: data
  })
}

//左侧团队个数
export function getMyTeamCnt(data) {
  return request({
    url: 'team/myteamcnt.html',
    method: 'get',
    params: data
  })
}






