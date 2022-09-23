import { App } from 'vue'
import { Button } from 'vant';

const vant ={
  install:function(Vue:App){
    Vue.use(Button)
  }
}
export default vant