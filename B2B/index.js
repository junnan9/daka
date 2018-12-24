//index.js
//获取应用实例
const app = getApp();
const globalData = app.globalData;
const size = 4;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showModal: false,
    phoneList:[],
    ggaoValue:{},
    intro: {},
    showFlag: 0,
    zuzitanchuang:0,
    brandName:'',
    _num: 0,
    _res: 0,
    first:'品牌',
    second:'系列',
    thirds:'价格区间',
    pinpaixuanzhe: [{
      id: 1,
      name: '苹果',
      selected: false,
      xilieList: [{
        id: 1,
        name: '苹果系列1',
        selected: false,
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      },
      {
        id: 2,
        selected: false,
        name: '苹果系列2',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      },
      {
        id: 3,
        name: '苹果系列3',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      }
      ]
    },
    {
      id: 2,
      selected: false,
      name: '华为',
      xilieList: [{
        id: 1,
        selected: false,
        name: '华为系列1',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]

      },
      {
        id: 2,
        name: '华为系列2',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      },
      {
        id: 3,
        name: '华为系列3',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      }
      ]
    },
    {
      id: 3,
      selected: false,
      name: '三星',
      xilieList: [{
        id: 1,
        selected: false,
        name: '三星系列1',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      },
      {
        id: 2,
        selected: false,
        name: '三星系列2',
        jiagequjian: [{
          id: 1,
          selected: false,
          name: '500-1000'
        },
        {
          id: 2,
          selected: false,
          name: '1000-1500'
        },
        {
          id: 3,
          selected: false,
          name: '1500-2000'
        },
        {
          id: 4,
          selected: false,
          name: '2000-3000'
        },
        {
          id: 5,
          selected: false,
          name: '300-5000'
        },
        {
          id: 6,
          selected: false,
          name: '5000以上'
        }
        ]
      }
      ]
    }
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tabNav: function (e) {
    this.setData({
      displays: "block"
    })
    // this.setData({
    //   selected1: false,
    //   selected2: false,
    //   selected: true
    // })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {

      var showMode = e.target.dataset.current == 0;

      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  choosePingpai: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _res: e.target.dataset.num
    })
    this.setData({
      thirds: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
  },
  onLoad: function () {
    if (globalData.firstRegist) {
      this.setData({ showModal: true });
    }
    // 初始化
    require("../../lib/js/init")(this);
    // console.log(this)
    this.init();
    var that = this;
    //处理用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    app.login(() => {
      //获取商品订单列表
      that.get(`${globalData.ctx}/Phone`, { index:0,size:50}, function (res) {
        // console.log(res);
        // res.data.data.value = JSON.parse(res.data.data.value);
        that.setData({ 
          phoneList: res.data.data,
          brandName: '品牌'
        })
      })
      //获取公告弹窗内容
      that.get(globalData.ctx + "/Config/0", null, function (res) {
        // console.log(res)
        that.setData({
          ggaoValue: res.data.data.value,
          intro: res.data.data.intro,
          showFlag:3,
          zuzitanchuang:0
        })
      })
      //加载阻止弹窗
      this.clickAlert();

      //加载公告栏
      this.showGonggao();

      // 加载购买弹窗
      this.showGoumai();

      //加载客服电话
      // getApp().getSevicePhone();
    })
  },
  onShareAppMessage: function (ops) { },
  getUserInfo: function (e) {
    console.log(e, "getUserInfo")
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    var that = this
    console.log("44")
    this.setData({
      // groupIndex: 0, optistIndex: 0, pupilIndex: 0, optistIndex: 0,
      // hotProduct: [], pupil: [], group: [], optist: []
    })

    //加载商品列表
    var param = {
      status: 1,
      sort: 2,//指定按销量逆序
      index: 0,
      size: 50
    }
    that.get(globalData.ctx + "/Phone", param, function (res) {
      that.showResult(res, function (res) {
        console.log(res, "加载商品列表");
        //分解图片
        // for (let i in res.data.data) {
        //   res.data.data[i].product.wheel = JSON.parse(res.data.data[i].product.wheel);
        // }
        that.setData({
          phoneList: res.data.data
        })
      })
    })

    //加载团购套餐
    //this.loadGroup();

    //加载验光师
    //this.loadOptometrist();

    // 加载隐形美瞳
    //this.loadPupil();
  },
  showModal: function () {
    this.setData({ showModal: true });
  },
  hideModal: function () {
    this.setData({ showModal: false });
  },
  /*页面一开始就出现弹窗式公告,点击白色弹窗任何位置取消公告*/
  clickAlert: function () {
    var that = this
    this.setData({
      showFlag: 3,
      zuzitanchuang: 1
    })
  },
  /*页面一开始就出现弹窗式公告*/
  showGonggao: function () {
    var that =this
    that.setData({
      showFlag: 3
    })
  },
  /*首页点击购买弹窗 */
  showGoumai:function(){
    var that =this
    that.setData({
      showFlag:1
    })
  }
})
