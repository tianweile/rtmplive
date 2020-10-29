import React, { Component } from "react";
import logo from "../login/images/logo.png";
import {Button} from "antd"
import "./forget.less"

export default class Forget extends Component {
  
  /**
   * 忘记密码dd
   */
  returnlogin = () =>{
    this.props.history.replace("/");
  }

  render() {
    return (
      <div className="forget">
        <div className="forget-header">
          <img src={logo} alt="logo" />
          <h1>RTMP视频直播系统</h1>
        </div>
        <div className="forget-content">
            <div className="forget-content-header"> <Button onClick={this.returnlogin}>返回登陆</Button>
            <text>密码重置中心</text></div>
            <div className="forget-center">
                主页
            </div>
         
        </div>
      </div>
    );
  }
}
