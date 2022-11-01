import { getjssdkapiInfo } from '../api/home'


const jssapiList = [
  'updateAppMessageShareData',
  // 'updateTimelineShareData',
  'onMenuShareAppMessage'
]
class WxService {
  async config() {
    const {data} = await getjssdkapiInfo({url:location.href.split("#")[0]})
    console.log(data,'data---WxService');
    console.log(location.href.split("#")[0],'location.href.split("#")[0]');
    wx.config({
      debug: false, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.noncestr, // 必填，生成签名的随机串
      signature: data.signature,// 必填，签名
      jsApiList: jssapiList // 必填，需要使用的 JS 接口列表
    });

    this.checkApi()

    wx.error(function (err:any) {
      console.error("error:", err);
    });
    this.onMenuShareAppMessage()

    
    
  }

  ready() {
    wx.ready(function () {
      console.log('执行');
      
      // config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。
    });
  }


  // 判断当前客户端版本是否支持指定 JS 接口
  checkApi(){
    wx.checkJsApi({
      jsApiList: jssapiList, // 需要检测的 JS 接口列表，所有 JS 接口列表见附录2,
      success: function(res:any) {
        console.log(res,'checkApi');
        
      // 以键值对的形式返回，可用的 api 值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      }
    });
  }

  

  // onMenuShareAppMessage

  onMenuShareAppMessage(){
    wx.ready(function(){
      wx.onMenuShareAppMessage({ 
        title: '测试标题', // 分享标题
        desc: '测试成了把', // 分享描述
        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
        imgUrl: 'https://img1.baidu.com/it/u=3750288563,660898866&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500', // 分享图标
        success: function () {
          // 设置成功
        }
      })
    })
  }


  // updateAppMessageShareData自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
  updateAppMessageShareData(){
    wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
      wx.updateAppMessageShareData({ 
        title: '测试标题', // 分享标题
        desc: '测试成了把', // 分享描述
        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
        imgUrl: 'https://img1.baidu.com/it/u=3750288563,660898866&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500', // 分享图标
        success: function () {
          // 设置成功
        }
      })
    }); 
  }
  // 
  updateTimelineShareData(){
    wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
      wx.updateTimelineShareData({ 
        title: '测试标题', // 分享标题
        link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
        imgUrl: 'https://img1.baidu.com/it/u=3750288563,660898866&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500', // 分享图标
        success: function () {
          // 设置成功
        }
      })
    });
  }

}

// export {WxService}
export default new WxService();
