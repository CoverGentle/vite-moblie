import { defineStore } from 'pinia'

export const useAccesstStore = defineStore('access', {
  // 相当于vue中的data
  state: () => ({
    access_token: "12121",
    expires_in: 7200,
    openid: "oPDxR512bzB7EjoiO0aKTn3KqaTo",
    refresh_token: "61_S4aAWaitG09MSkv72JWNQdcH-ovj5Qk8g4_qGXgPJGWHAhVsCfd4RHWZ7UVu0cqm7_fLa1TsLkZASyXwqovLvx3djMRlIJS3MUPtY-Y9ZHU",
    scope: "snsapi_userinfo"
  }),
  // 相当于vue中的computed
  getters: {
    getAccessToken:(state)=>state.access_token
  },
  // 相当于vue中的metheds
  actions: {
    setAccessToken(val:string){
      this.access_token = val
      localStorage.setItem('access_token',val)
    }
  }
})