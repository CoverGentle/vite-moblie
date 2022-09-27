import { App } from 'vue'
import { Button ,Tabbar, TabbarItem} from 'vant';

const vant ={
  install:function(Vue:App){
    Vue.use(Button)
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
  }
}
export default vant