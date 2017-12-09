//detail.js
var app = getApp();
var common = require('../../utils/common.js')

Page({
  data: {
    name: "",
    phone: "",
    age: "",
    sex: "",
    birthday: "",
    tags:"",
    display: "none",
    disable: true,
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
    source: app.globalData.source1,
  },
  //选择国家
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //选择时间=不成功
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //选择日期=不成功
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  //提交
  formSubmit: function(){
    console.log("submit");
    wx.showToast({
      title: '提交成功不跳转',
      icon: 'success',
      duration: 2000
    })
  },
  //重置
  formReset: function(){
    console.log("reset");
    wx.showActionSheet({
      itemList: ['这里时只是演示', '捕获到事件', '可以做其他动作'],
      success: function(res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  },
  //姓名
  changeName: function(e){
    var that = this;
    common.valipt(e,that);
  },
  //手机
  changePhone: function(e){
    this.setData({
      phone: e.detail.value
    })
    console.log(e.detail.value);
  },
  //单选事件处理
  radioChange: function(e){
    console.log(e.detail.value);
  },
  //多选事件处理函数
  checkboxChange: function(e) {
    console.log(e.detail.value);
  },
  //简介
  blurArea: function(e){
    console.log(e.detail.value)
  },
  //公开信息switch
  switchChange: function(e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);
  },
  listenerButtonChooseImage:function(){
    var that = this;
    wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      that.setData({
        source:tempFilePaths,
        display:""
      })
    }
  })
  },
  onLoad: function () {
    console.log('onLoad detail page');
    console.log(app.globalData.source1);
  }
})
