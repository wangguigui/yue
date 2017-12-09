//ww1.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrl: "https://www.baidu.com/img/bd_logo1.png",
    dataList: {
        title: "百度一下 你就知道",
        img: "https://www.baidu.com/img/bd_logo1.png"
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../page1/ww1'
    })
  },
  goPage2: function(){
    wx.navigateTo({
      url: '../page2/ww2',
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
  },
  onLoad: function () {
    console.log('Load page1');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      wx.showToast({
        title: userInfo.nickName,
        icon: 'success_circle',
        duration: 1000
      })
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
