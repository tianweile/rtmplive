/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Input, Form, Image } from "@tarojs/components";
// import storageUtils from "../../utils/storageUtils";
// import memoryUtils from "../../utils/memoryUtils";
import "./login.less";
// ES6 的 import 语法来引用图片
import logo from "../../img/login/rtmplogo.gif";

export default class Login extends Component {
  gotoAdmin = () => {};
  gotoRegister = () => {
    Taro.navigateTo({
      url: "/pages/register/register",
    });
    console.log("进入注册页面");
  };
  formSubmit = async (e) => {
    const username = e.detail.value.username;
    const password = e.detail.value.password;
    // //input输入规则校验
    if (username == 0 || password == 0) {
      Taro.showModal({
        title: "温馨提示：",
        content: "用户名或密码不能为空！",
        showCancel: false,
      });
    } else {
      Taro.showLoading({
        title: "请求中...",
      });
      Taro.request({
        url: "http://localhost:5000/login", //仅为示例，并非真实的接口地址
        method: "Post",
        data: {
          username,
          password,
        },
        header: {
          "content-type": "application/json", // 默认值
        },
        success(res) {
          console.log(res.data);
          console.log(res.data.status);
          if (res.data.status === 0) {
            //1.存用户信息到本地存储

            Taro.setStorageSync("username", res.data.username);
            Taro.switchTab({
              url: "/pages/home/home",
            });
            console.log("进入主页面");
            Taro.showToast({
              title: "登录成功",
              icon: "success",
              duration: 2000,
            });
          } else {
            Taro.showToast({
              title: res.data.msg,
              icon: "none",
              duration: 2000,
            });
          }
        },
      });
    }
  };
  render() {
    return (
      <View>
        <View className="header">
          <Image src={logo}></Image>
        </View>
        <Form onSubmit={this.formSubmit}>
          <View className="comment">
            <View className="com">
              <Text className="title">账号</Text>
              <Input
                name="username"
                bindinput="userNameInput"
                placeholder="请输入用户名 "
                type="text"
              />
            </View>
            <View className="hr"></View>

            <View className="com">
              <Text className="title">密码</Text>
              <Input
                name="password"
                bindinput="passWordInput"
                placeholder="请输入密码"
                password=""
                // value="{{password}}"
                type="password"
              />
            </View>
            <View className="hr"></View>
          </View>
          <View className="button">
            <Button
              className="button-login"
              onClick={this.gotoAdmin}
              form-type="submit"
            >
              登录
            </Button>
            <Button className="button-login" onClick={this.gotoRegister}>
              注册
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}
