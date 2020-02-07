//index.js
// 引入请求库
import { request } from "../../request/request.js"
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navList: [],
    floorData: []
  },
  handleClick(e) {
    console.log(e.currentTarget.id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 请求轮播图数据
    const swiperRes = await request({
      url: '/home/swiperdata'
    });
    this.setData({
      swiperList: swiperRes.data.message
    });
    // 请求导航栏数据
    const navRes = await request({
      url: '/home/catitems'
    });
    this.setData({
      navList: navRes.data.message
    });
    // 请求楼层数据
    const floorRes = await request({
      url: '/home/floordata'
    });
    this.setData({
      floorData: floorRes.data.message
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})