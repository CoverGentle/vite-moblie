import { defineStore } from "pinia";
import {getQueryString} from '../untils/commom/index'

export const useUserInfoStore = defineStore('userInfo', {
  state:()=>({
    openid:'12345',
    nickname:'小七',
    sex:'男',
    headimgurl:''

  }),
  getters:{
    getopenid:(state)=>{
      return state.openid
    },
    getnickname:(state)=>{
      return state.nickname
    },
    getheadimgurl:(state)=>{
      return state.headimgurl
    },
    getSex:(state)=>{
      return state.sex
    }
  },
  actions:{
    setNickName(val:string){
      this.nickname = val
    },
    setheadimgurl(val:string){
      this.headimgurl = val
    }

    
  }
})