<template>
  <router-view></router-view>
  <van-tabbar route v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <!-- <van-tabbar-item icon="search">发现</van-tabbar-item> -->
      <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item> -->
      <van-tabbar-item to="/user" icon="user-o">个人</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang='ts'>
import {reactive, ref, toRefs} from 'vue'
const active = ref(0);
</script>

<style lang='less' scoped> 
  
</style>