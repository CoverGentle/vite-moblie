import { defineStore } from 'pinia'

export const useAccesstStore = defineStore('access', {
  // 相当于vue中的data
  state: () => ({
    access_token: "",
    expires_in: 7200,
    openid: "",
    refresh_token: "",
    scope: ""
  }),
  // 相当于vue中的computed
  getters: {
    getAccessToken:(state)=>{
      return state.access_token
    }
  },
  // 相当于vue中的metheds
  actions: {
    setAccessToken(val:string){
      this.access_token = val
      localStorage.setItem('access_token',val)
    }
  }
})