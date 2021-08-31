import { request } from '@/plugins/request'

// 获取个人详情
export function getProfile(username) {
  return request.get(`/api/profiles/${username}`)
}

// 关注用户
export function followUser(username) {
  return request.post(`/api/profiles/${username}/follow`)
}

// 取关用户
export function unFollowUser(username) {
  return request.delete(`/api/profiles/${username}/follow`)
}
