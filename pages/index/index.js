//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '我是王伟伟',
    userInfo: {},
    settingImg: "../../image/setting.png",
    wechatImg: "../../image/wechat.png"
  },
  //点击头像
  bindViewTap: function() {
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  },
  //点击微信按钮
  wechatTap: function(){
    wx.showModal({
      title: '提示',
      content: '您点击了微信按钮',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        }
      }
    })
  },
  //点击设置按钮
  settingTap: function(){
    console.log('werqer')
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
