import { getJssdkConfig } from '../api/home'

class WxService {
  config() {
    getJssdkConfig().then((res)=>{
      console.log(res);
      // wx.config({
      //   debug: false, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
      //   appId: 'wxbdc937314035728b', // 必填，公众号的唯一标识
      //   timestamp: res, // 必填，生成签名的时间戳
      //   nonceStr: '', // 必填，生成签名的随机串
      //   signature: '',// 必填，签名
      //   jsApiList: [] // 必填，需要使用的 JS 接口列表
      // });
    })
  }

  ready() {
    wx.ready(function () {
      // config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。
    });
  }

}

// export {WxService}
export default new WxService();
