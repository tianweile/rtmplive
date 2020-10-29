export default {
  pages: [
    "pages/login/login",
    "pages/register/register",
    "pages/home/home",
    "pages/live/live",
    "pages/ptz/ptz",
    "pages/im/im",
    "pages/my/my",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "RTMP视频直播系统",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#2c2c2c",
    selectedColor: "#280869",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/home",
        text: "首页",
        iconPath: "img/nav/home.png",
        selectedIconPath: "img/nav/homeon.png",
      },
      {
        pagePath: "pages/live/live",
        text: "直播",
        iconPath: "img/nav/live.png",
        selectedIconPath: "img/nav/liveon.png",
      },
      {
        pagePath: "pages/ptz/ptz",
        text: "PTZ",
        iconPath: "img/nav/ptz.png",
        selectedIconPath: "img/nav/ptzon.png",
      },
      {
        pagePath: "pages/im/im",
        text: "聊天室",
        iconPath: "img/nav/IM.png",
        selectedIconPath: "img/nav/IMon.png",
      },
      {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "img/nav/my.png",
        selectedIconPath: "img/nav/myon.png",
      },
    ],
  },
};
