import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

// 1. 引入你需要的组件
import Vant from './ui/index';
// 2. 引入组件样式
import 'vant/lib/index.css';

// 引入vconsole
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()



const app = createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')
