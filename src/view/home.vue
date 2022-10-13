<template>
  <div>
    首页
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { wechatLogin } from '../untils/api/home'
onMounted(() => {
  // wechatLoginInfo()
})
const wechatLoginInfo = () => {
  wechatLogin('code').then(res => {
    console.log(res);
  })
}
</script>

<style lang='less' scoped>

</style>