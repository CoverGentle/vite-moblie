<template>
  <div>
    <van-button type="primary" @click="jump">登录</van-button>
  </div>
</template>

<script setup lang='ts'>
import {reactive, ref, toRefs} from 'vue'
import {getQueryString} from '../untils/commom/index'
import { useRouter } from 'vue-router'

const router = useRouter()
const jump = ()=>{
  router.push('/home')
}
</script>

<style lang='less' scoped> 
  
</style>