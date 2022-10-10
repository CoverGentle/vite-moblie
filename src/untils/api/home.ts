import request from '../request/request'

// 微信授权登录
export const wechatLogin = (data:string)=>{
  return request({
    url: '/wechat/login',
    method: 'post',
    data
  })
}