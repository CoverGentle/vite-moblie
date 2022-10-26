import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

// 1. 引入你需要的组件
import Vant from './ui/index';
// 2. 引入组件样式
import 'vant/lib/index.css';

//引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()


const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(pinia)
app.mount('#app')
