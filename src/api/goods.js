import http from './public'
// 商品列表
export const getAllGoods = (params) => {
  return http.fetchPost('/goods/allGoods', params)
}
