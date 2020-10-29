import React, { Component } from "react";
import { Carousel } from "antd";
import "./home.less";
import "../../../../css/com.less";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotPosition: "bottom",
    };
  }

  render() {
    return (
      //主页面
      <div className="com">
        {/* 轮播图 */}
        <div className="carousel">
          <Carousel autoplay dotPosition={this.state.dotPosition}>
            <div className="home-image">
              <h3>
                <a href="/admin/live">
                  <img
                    src={require("../../../../images/home/homepage1.png")}
                    alt=""
                  />
                </a>
              </h3>
            </div>
            <div className="home-image">
              <h3>
                <a href="/admin/im">
                  <img
                    src={require("../../../../images/home/homepage2.png")}
                    alt=""
                  />
                </a>
              </h3>
            </div>
          </Carousel>
        </div>
        {/* 标题 */}
        <div className="home-title">
          <p>欢迎来到RTMP视频直播系统</p>
        </div>
        {/* 卫视直播 */}
        <div className="home-box">
          <p>卫视直播</p>
        </div>
        <div className="live">
          <img src={require("../../../../images/home/homepage4.png")} alt="" />
        </div>
        <div className="home-news">
          <ul>
            <li>
              <a href="/admin/live">
                <div>
                  <img
                    src={require("../../../../images/home/homepage1.png")}
                    alt=""
                  />
                  <p>【湖北卫视】</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/admin/live">
                <div>
                  <img
                    src={require("../../../../images/home/homepage1.png")}
                    alt=""
                  />
                  <p>【湖南卫视】</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/admin/live">
                <div>
                  <img
                    src={require("../../../../images/home/homepage1.png")}
                    alt=""
                  />
                  <p>【香港财经卫视】</p>
                </div>
              </a>
            </li>
            <li>
              <a href="/admin/live">
                <div>
                  <img
                    src={require("../../../../images/home/homepage1.png")}
                    alt=""
                  />
                  <p>【央视综合】</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* obs直播 */}
        <div className="home-box">
          <p>obs直播</p>
        </div>
        <div className="live">
          <img src={require("../../../../images/home/homepage5.png")} alt="" />
        </div>
        {/* 海康移动直播 */}
        <div className="home-box">
          <p>海康移动直播</p>
        </div>
        <div className="live">
          <img src={require("../../../../images/home/homepage3.png")} alt="" />
        </div>
        <div className="test"></div>
      </div>
    );
  }
}
