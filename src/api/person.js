//OA个人首页api
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

//个人首页左上角的数量显示
export function getWorkplangeneralInfo(data) {
  return request({
    url: 'performance/workplangeneralinfo.html',
    method: 'get',
    params: data
  })
}

//个人首页日志显示
export function getJournal(data) {
  return request({
    url: 'person/oalog.html',
    method: 'get',
    params: data
  })
}


//个人首页 日志数量
export function getVersionUpdateNum(data) {
  return request({
    url: 'person/versionupdatenum.html',
    method: 'get',
    params: data
  })
}




//个人首页用户信息api
export function getUserInfo(data) {
  return request({
    url: 'person/userinfo.html',
    method: 'get',
    params: data
  })
}



//上传头像api
export function postUploadHeadPhoto(data) {
  return request({
    url: 'person/uploadheadphoto.html',
    method: 'post',
    data: qs.stringify(data)
  })
}



//时光隧道api
export function getTimeTunnel(data) {
  return request({
    url: 'person/arrange.html',
    method: 'get',
    params: data
  })
}

//打卡记录APi
export function postCardRecord(data) {
  return request({
    url: 'person/cardrecord.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//文章详情api
export function postContentDetail(data) {
  return request({
    url: 'person/contentdetail.html',
    method: 'get',
    params: data
  })
}

//个人部门弹窗api
export function getDepartmentInfo(data) {
  return request({
    url: 'person/departmentinfo.html',
    method: 'get',
    params: data
  })
}

//企业大事记api
export function getCompanyInfo(data) {
  return request({
    url: 'person/companyinfo.html',
    method: 'get',
    params: data
  })
}


//上班打卡数据显示api
export function getCardShow(data) {
  return request({
    url: 'person/cardshow.html',
    method: 'get',
    params: data
  })
}

//上班打卡，点击api
export function postWorkCard(data) {
  return request({
    url: 'person/workcard.html',
    method: 'post',
    data: qs.stringify(data)
  })
}

//最新公告api
export function postNews(data) {
  return request({
    url: 'person/news.html',
    method: 'get',
    params: data
  })
}

//最新公告api 弹窗
export function myalert(data) {
  return request({
    url: 'person/myalert.html',
    method: 'get',
    params: data
  })
}

//处罚公告 - 列表api
export function postTicketInfo(data) {
  return request({
    url: 'person/ticketinfo.html',
    method: 'get',
    params: data
  })
}


//处罚公告 - 广告栏目api
export function postPunishimg(data) {
  return request({
    url: 'person/punishimg.html',
    method: 'get',
    params: data
  })
}






