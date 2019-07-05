// 角色管理api
import request from '@/utils/request'
import qs from 'qs'

/**
 * 获取登录角色权限
 */
export function getPermissionRoles(data) {
  return request({
    url: 'login/getauthority.html',
    method: 'get',
    params: data
  })
}