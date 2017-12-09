var common = require('../../utils/common.js')
Page({
  data: {
    list: [
      {
        title: "列表标题",
        imgsrc: "../../image/post.png",
        content: "别告诉我没人在意你的胖瘦，胖了容易没朋友"
      },
      {
        title: "列表标题",
        imgsrc: "../../image/post.png",
        content: "别告诉我没人在意你的胖瘦，胖了容易没朋友"
      },
      {
        title: "列表标题",
        imgsrc: "../../image/post.png",
        content: "别告诉我没人在意你的胖瘦，胖了容易没朋友"
      },
      {
        title: "列表标题",
        imgsrc: "../../image/post.png",
        content: "别告诉我没人在意你的胖瘦，胖了容易没朋友"
      }
    ]
  },
  onLoad: function(options) {
    common.sayHello("王伟伟");
  },
  onReady: function() {
    wx.showToast({
      title: 'onready',
      icon: 'clear',
      duration: 1000
    })
  },
  onShow: function() {
    wx.showToast({
      title: '加载海外购',
      icon: 'clear',
      duration: 1000
    })
  },
  onHide: function() {
    wx.showToast({
      title: '退出海外购',
      icon: 'safe_success',
      duration: 1000
    })
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    wx.showToast({
      title: '下拉刷新',
      icon: 'waiting',
      duration: 2000
    })
  },
  onReachBottom: function() {
    wx.showToast({
      title: '到达底部了',
      icon: 'success_circle',
      duration: 1000
    })
  },
  detail: function(){
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})