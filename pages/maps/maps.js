// pages/maps/maps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  //查看地图
  openLocation: function (e) {
   
    wx.openLocation({
   
      latitude: 31.18927574157714,
      longitude: 121.40722656249997,
       name: '古北虹苑二期',
       address: '上海市闵行区姚虹路259弄',
       complete: function () {
         console.log('complete', arguments);
      }
      

   
    })
    

  },
  //获取地图
  getLocations:function()
  {
    var that = this;
    //获取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
    
  },
  //选择地图
  chooseLocation: function (e) {

    wx.chooseLocation({

      success: function (res) {

        console.log(res);

      },

    })

  },
 
})