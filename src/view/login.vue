<template>
  <div>
    <van-button type="primary" @click="jump">登录</van-button>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref, toRefs} from 'vue'
import {getQueryString} from '../untils/commom/index'
import { useRouter } from 'vue-router'
import {wechatLogin} from '../untils/api/home'

let codeData = getQueryString('code')
console.log(codeData,'code');

const getAuthInfo = async ()=>{
  let codeData = getQueryString('code')
  console.log(codeData,'code');
  const {data} = await wechatLogin({code:codeData})
  
  console.log(data,'data');
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