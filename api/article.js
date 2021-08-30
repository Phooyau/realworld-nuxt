import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
  return request.get('/api/articles', { params })
}

// 获取关注的文章列表
export const getFeedArticles = params => {
  return request.get('/api/articles/feed', { params })
}

// 添加点赞
export const addFavorite = (slug, data) => {
  return request.post(`/api/articles/${slug}/favorite`, data)
}

// 取消点赞
export const deleteFavorite = (slug, data) => {
  return request.delete(`/api/articles/${slug}/favorite`, data)
}

// 获取文章详情
export const getArticle = (slug) => {
  return request.get(`/api/articles/${slug}`)
}

// 创建文章
export const addArticle = (data) => {
  return request.post('/api/articles', data)
}

// 获取评论
export const getComments = (slug) => {
  return request.get(`/api/articles/${slug}/comments`)
}

// 添加评论
export const addComments = (slug, data) => {
  return request.post(`/api/articles/${slug}/comments`, data)
}
