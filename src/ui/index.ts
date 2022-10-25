import { App } from 'vue'
import { Button ,Tabbar, TabbarItem,PullRefresh,Toast } from 'vant';

const vant ={
  install:function(Vue:App){
    Vue.use(Button)
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    Vue.use(PullRefresh)
    Vue.use(Toast)
  }
}
export default vant