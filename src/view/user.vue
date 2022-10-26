<template>
  <div class="userInfo">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div>
        <p>{{ userInfo.nickname }}</p>
        <img :src="userInfo.headimgurl" alt="">
      </div>
      <span>刷新次数: {{ count }}</span>
    </van-pull-refresh>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useUserInfoStore } from '../store/user';
import { getWxUserInfo } from '../untils/api/home'
const count = ref(0);
const loading = ref(false);
const store = useUserInfoStore();
const userInfo = reactive<userInfo>({
  openid:'',
  nickname:'',
  sex:'',
  headimgurl:''
})

onMounted(() => {
  getUserInfo()
})
// 下拉刷新
const onRefresh = () => {
  setTimeout(() => {
    // Toast('刷新成功');
    loading.value = false;
    count.value++;
    getUserInfo()
  }, 1000);
};

// 获取用户信息接口
const getUserInfo = async () => {
  const { data } = await getWxUserInfo()
  console.log(data);
  userInfo.nickname = data.nickname
  userInfo.openid = data.openid
  userInfo.sex = data.sex
  userInfo.headimgurl = data.headimgurl
  store.setNickName(data.nickname)
  store.setheadimgurl(data.headimgurl)
}

</script>

<style lang='less' scoped>
.userInfo {
  width: 100%;
  height: 100vh;

  .van-pull-refresh {
    height: 100vh;
  }
}
</style>