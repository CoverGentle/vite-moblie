<template>
  <div class="main">
    <div class="homePage">
      <div class="home-top">
        <div class="home-address">
          <van-icon name="location-o" @click="handleAddress" /><span>{{ address }}</span>
        </div>
        <div class="home-search-inform">
          <div class="search">
            <van-icon name="search" @click="handleSearch" />
          </div>
          <div class="inform">
            <van-icon name="chat-o" :dot="isDot" @click="handleInfo" />
          </div>
        </div>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="home-center">
        <p>惊不惊喜</p>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useAccesstStore } from '../store/index'
import WxService from '../untils/weixin/wxConfig';
const accessStore = useAccesstStore()
const address = ref('上海')
const isDot = ref(false)

onMounted(() => {
  handelShare()
})



// 获取定位切换地址
const handleAddress = () => {
  console.log("获取地址");

}
// 搜索
const handleSearch = () => {
  console.log("搜索");
}

// 消息通知
const handleInfo = () => {
  console.log('消息通知')
}

// 分享
const handelShare = () => {
  const option = {
    title: '首页',
    desc: '更多精彩等着你哦',
    link: window.location.href,
    imgUrl: 'https://img1.baidu.com/it/u=3750288563,660898866&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500'

  }
  WxService.onMenuShareAppMessage(option)
}

</script>

<style lang='less' scoped>
.main {
  width: 100%;
  height: 100vh;
}

.homePage {
  width: 96%;
  margin: 0 auto;
  background: #fff;
  height: 100vh;

  .home-top {
    height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 40px;

    .home-address {
      width: 50px;
      text-align: center;

      span {
        font-size: 15px;
        font-weight: 500;
      }
    }

    .home-search-inform {
      display: flex;
      justify-content: space-between;

      .search {
        width: 30px;
        text-align: center;

        .van-icon {}
      }

      .inform {
        width: 30px;
        text-align: center;
      }
    }
  }

  .home-center {
    text-align: center;
  }

  .van-swipe {
    border-radius: 8px;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>