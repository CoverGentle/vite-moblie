<template>
  <div>
    <h1>首页</h1>
    {{accessStore.access_token}}
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { wechatLogin } from '../untils/api/home'
import { useAccesstStore } from '../store/index'
const accessStore = useAccesstStore()

onMounted(() => {
  // wechatLoginInfo()
})

</script>

<style lang='less' scoped>

</style>