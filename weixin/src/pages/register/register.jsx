import React, { Component } from "react";
// import Taro from '@tarojs/taro'
import Taro from "@tarojs/taro";
import { View, Text, Button, Input, Form, Image } from "@tarojs/components";
import "./register.less";
import logo from "../../img/login/weixinlogo.gif";

export default class Register extends Component {
  formSubmit = (e) => {
    console.log(e.detail.value);
    //input输入规则校验
    const username = e.detail.value.username;
    const password = e.detail.value.password;
    const Confirmpassword = e.detail.value.Confirmpassword;
    if (username == 0 || password == 0) {
      Taro.showModal({
        title: "温馨提示：",
        content: "用户名或密码不能为空！",
        showCancel: false,
      });
    } else {
      if (password != Confirmpassword) {
        Taro.showModal({
          title: "温馨提示：",
          content: "两次输入密码不一样！",
          showCancel: false,
        });
      } else {
        Taro.showLoading({
          title: "请求中...",
        }),
          Taro.request({
            url: "http://localhost:5000/register", //仅为示例，并非真实的接口地址
            method: "Post",
            data: {
              username,
              password,
            },
            header: {
              "content-type": "application/json", // 默认值
            },
            success: (res) => {
              console.log(res);
              console.log(res.data.status);
              if (res.data.status === 0) {
                console.log("注册成功");
                Taro.showToast({
                  title: "注册成功",
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
                placeholder="请输入用户名"
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
              />
            </View>
            <View className="hr"></View>
            <View className="com">
              <Text className="title">密码</Text>
              <Input
                name="Confirmpassword"
                bindinput="passWordInput"
                placeholder="请确认密码"
                password=""
              />
            </View>
            <View className="hr"></View>
          </View>
          <View className="button">
            <Button
              className="button-register"
              onClick={this.gotoRegister}
              form-type="submit"
            >
              欢迎注册RTMP视频直播系统
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}
