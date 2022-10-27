import { App } from 'vue'
import { Button ,Tabbar, TabbarItem,PullRefresh,Toast,Swipe, SwipeItem,Icon  } from 'vant';

const vant ={
  install:function(Vue:App){
    Vue.use(Button)
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    Vue.use(PullRefresh)
    Vue.use(Toast)
    Vue.use(Swipe)
    Vue.use(SwipeItem)
    Vue.use(Icon)
  }
}
export default vant