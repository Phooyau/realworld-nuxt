import axios from 'axios'

export const request = axios.create({
  // baseURL: 'https://conduit.productionready.io'
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

// 插件导出函数必须作为默认值
export default ({ store, redirect }) => {
  request.interceptors.request.use(function (config) {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { response } = error
    if (response.status === 401) {
      redirect('/login')
    }
    return Promise.reject(error);
  });
}
