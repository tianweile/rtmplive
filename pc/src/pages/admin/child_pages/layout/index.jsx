import React, { Component } from "react";
import Navheader from "../../../../commponents/Navheader";
import Footer from "../../../../commponents/footer";
export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* 头部导航栏 */}
        <Navheader></Navheader>
        {/* 中间布局 所有其他的页面都是上面导航栏的子页面*/}
        {this.props.children}
        {/* 底部 */}
        <Footer></Footer>
      </div>
    );
  }
}
