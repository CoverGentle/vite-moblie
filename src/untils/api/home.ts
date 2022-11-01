import request from '../request/request'

// 验证公众号
export const getJssdkConfig = ()=>{
  return request<wxjssdk>({
    url:'/wechat/getJssdkConfig',
    method:'get',
  })
}

// 微信授权登录
export const wechatLogin = (data:{code:string})=>{
  return request({
    url: '/wechat/getAuthUser',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getWxUserInfo = () =>{
  return request({
    url:'/wechat/getWxUserInfo',
    method:'get'
  })
}

// 获取jssdk的jssapi_ticket
export const getjssdkapiInfo = (data:{url:string})=>{
  return request({
    url:'/wechat/getjssdkapiInfo',
    method:'post',
    data
  })
}


