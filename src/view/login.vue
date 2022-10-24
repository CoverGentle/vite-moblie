<template>
  <div>
    <van-button type="primary" @click="jump">登录</van-button>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {getQueryString} from '../untils/commom/index'
import { useRouter } from 'vue-router'
import {wechatLogin,getWxUserInfo} from '../untils/api/home'
import { useAccesstStore } from '../store/index'

let codeData = getQueryString('code')
const accessStore = useAccesstStore()

console.log(codeData,'code');

const getAuthInfo = async ()=>{
  let codeData = getQueryString('code')
  console.log(codeData,'code');
  const {data} = await wechatLogin({code:codeData})
  accessStore.setAccessToken(data.access_token)
  console.log(data,'data');
  // 获取用户信息接口
  getWxUserInfo()
}
onMounted(()=>{
  getAuthInfo() 
})



const router = useRouter()
const jump = ()=>{
  router.push('/home')
}
</script>

<style lang='less' scoped> 
  
</style>