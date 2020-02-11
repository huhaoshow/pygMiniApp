// pages/category/index.js
// 引入请求库
import { request } from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoriesList:[], //左边分类列表数据
    categoriesContent:[], //右边显示的分类详细内容
    categoriesIndex: 0 //分类索引值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    // 页面显示后请求分类数据渲染页面
    const getCategoryRes = await request({
      url: "/categories"
    });
    const categoriesList = getCategoryRes.data.message
    console.log(categoriesList);
    const categoriesContent = categoriesList[0].children;
    this.setData({
      categoriesList,categoriesContent
    })
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