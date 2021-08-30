import { request } from '@/plugins/request'

// 获取当前用户信息
export const getUser = params => {
  return request.get('/api/user', { params })
}
// 更新当前用户信息
export const editUser = data => {
  return request.put('/api/user', data)
}
