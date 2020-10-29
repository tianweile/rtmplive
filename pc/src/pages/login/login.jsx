import React, { Component } from "react"; //
import logo from "./images/logo.png";
import "./login.less";
import { Form, Input, Button, Checkbox, message } from "antd";
import { Tabs } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  LockOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router-dom";
import { reqLogin, reqRegister } from "../../api";
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";
import "../../css/com.less";
const { TabPane } = Tabs;
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "login",
    };
  }
  /**
   * 登录注册事件
   */
  onFinish = async (value, err) => {
    const username = value.username;
    const password = value.password;
    if (!err) {
      //console.log("Received values of form: ", values);
      //alert(`发登陆的ajax请求, username=${username}, password=${password}`);
      /**
       * 登录事件
       */
      if (this.state.action === "login") {
        const result1 = await reqLogin(username, password);
        console.log(result1.data);
        //登录成功
        if (result1.status === 0) {
          const user = result1.data;
          //将用户信息保存到local
          storageUtils.saveUser(user);
          //将用户信息保存到内存中
          memoryUtils.user = user;

          this.props.history.replace("/admin");
          message.success("登录成功，欢迎来到RTMP视频直播系统！");
        } else {
          message.error(result1.msg);
        }
      }
      /**
       * 注册事件
       */
      if (this.state.action === "register") {
        const result2 = await reqRegister(username, password);
        //注册成功
        if (result2.status === 0) {
          message.success("注册成功");
        } else {
          message.error(result2.msg);
        }
      }
    } else {
      alert("验证失败");
    }
  };
  /**
   * tabs切换事件
   */
  handleTabsKey = (key) => {
    console.log(key);
    this.setState({
      action: key,
    });
  };
  /* 
    对密码进行自定义验证
    */
  validatePwd = (rule, value, callback) => {
    // 1).必须输入
    // 2).必须大于等于4位
    // 3).必须小于等于12位
    // 4).必须是英文、数字或下划线组成
    value = value.trim();
    if (!value) {
      callback("请输入密码");
    } else if (value.length < 4) {
      callback("密码不能小于4位");
    } else if (value.length > 12) {
      callback("密码不能大于12位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("密码必须是英文、数字或下划线组成");
    } else {
      callback(); // 验证通过
    }
  };
  /**
   * 忘记密码dd
   */
  forget = () => {
    this.props.history.replace("/forget");
  };

  render() {
    //读取保存的user信息，如果存在，直接跳转到管理界面
    const user = memoryUtils.user;
    if (user.username) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <div className="login">
          {/* 头部 */}
          <div className="login-header">
            <img src={logo} alt="logo" />
            <h1>RTMP视频直播系统</h1>
          </div>
          {/* 登录注册 */}
          <div className="login-content">
            <Tabs
              defaultActiveKey="login"
              centered
              onChange={this.handleTabsKey}
            >
              <TabPane
                tab={
                  <span className="tab">
                    <TeamOutlined />
                    登录
                  </span>
                }
                key="login"
              >
                {/*登录Form表单 */}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      //声明式验证：使用插件已定义好的规则进行验证
                      {
                        required: true,
                        whitespace: true,
                        message: "请输入用户名!",
                      },
                      { min: 3, message: "用户名不能小于3位" },
                      { max: 12, message: "用户名不能大于12位" },
                      // {
                      //   pattern: /^[a-zA-Z0-9]+$/,
                      //   message: "用户名必须是英文、数字、或下划线",
                      // },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="请输入用户名"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ validator: this.validatePwd }]}
                    hasFeedback
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="请输入密码"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>记住我</Checkbox>
                    </Form.Item>
                    <Button className="a" onClick={this.forget}>
                      忘记密码
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      onClick={this.login}
                      className="button-login"
                      htmlType="submit"
                    >
                      登陆
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <SettingOutlined />
                    注册
                  </span>
                }
                key="register"
              >
                <Form name="normal_login" onFinish={this.onFinish}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "请输入用户名!",
                      },
                      { min: 4, message: "用户名不能小于4位" },
                      { max: 12, message: "用户名不能大于12位" },
                      // {
                      //   pattern: /^[a-zA-Z0-9]+$/,
                      //   message: "用户名必须是英文、数字、或下划线",
                      // },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="请输入用户名"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ validator: this.validatePwd }]}
                    hasFeedback
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="请输入密码"
                    />
                  </Form.Item>

                  <Form.Item
                    name="Confirm Password"
                    rules={[
                      { required: true, message: "请确认密码!" },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords that you entered do not match!"
                          );
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="请确认密码"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className="button-login"
                      htmlType="submit"
                      onClick={this.register}
                    >
                      注册
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
