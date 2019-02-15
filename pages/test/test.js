Page({
  /**
   * 页面的初始数据
   */
  data: {
    //测试
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('mapload...');
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log('纬度' + res.latitude);
        console.log('经度' + res.longitude);
        that.setData({
          latitudes: res.latitude,
          longitudes: res.longitude,
        })
      },
    })
  },
})
