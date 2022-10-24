import request from '../request/request'

// 微信授权登录
export const wechatLogin = (data:{code:string})=>{
  return request({
    url: '/wechat/getAuthUser',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getWxUserInfo = ()=>{
  return request({
    url:'/wechat/getWxUserInfo',
    method:'get'
  })
}

