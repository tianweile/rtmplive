import React, { Component } from "react";
import "../../css/com.less";
import "./footer.less";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-bc">
        {/* 底部 */}
        <div className="footer com">
          <div className="footer-left">
            <ul>
              <li>
                <a href="/admin">
                  <span>首页</span>
                </a>
              </li>
              <li>
                <a href="/admin/live">
                  <span>直播</span>
                </a>
              </li>
              <li>
                <a href="/admin/ptz">
                  <span>ptz控制</span>
                </a>
              </li>
              <li>
                <a href="/admin/im">
                  <span>聊天室</span>
                </a>
              </li>
              <li>
                <a href="/admin/im">
                  <span>个人中心</span>
                </a>
              </li>
              <li>
                <a href="/admin/im">
                  <span>关于我们</span>
                </a>
              </li>
            </ul>
          </div>
          {/* 微信 */}
          <div className="footer-right">
            <img src={require("../../images/footer/weixin.jpg")} alt="" />
            <p>微信扫一扫体验小程序版</p>
          </div>
        </div>
      </div>
    );
  }
}
