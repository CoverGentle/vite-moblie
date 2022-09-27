// 路由配置文件

import { App } from 'vue'
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'


const routes:RouteRecordRaw[] = [
  // {
  //   path:'/',
  //   redirect:'/home'
  // },
  {
    path:'/',
    name:'home',
    meta:{
      title:'首页'
    },
    component:()=>import('../view/home.vue')
  },
  {
    path:'/login',
    name:'login',
    meta:{
      title:'登录页'
    },
    component:()=>import('../view/login.vue')
  },
  
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


// router.beforeEach((to,from,next)=>{
//   if(to.path === "/login"){
//     next()
//   }else{
//     if(localStorage.getItem('token')){
//       next()
//     }else{
//       next("/login")
//     }
//   }
// })




//初始化路由
// export const initRouter = (app:App<Element>)=>{
//   app.use(router)
// }

export default router