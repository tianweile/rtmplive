import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  
} from "@ant-design/icons";
import "./Navigation.less";
export default class Person extends Component {
  render() {
    return (
      <Menu
        // className="Menu_img"
        // style={{
        //   width: 256,
        //   height: 512,
        //   marginTop: 20,
        //   marginLeft: 80,
        // }}

        mode="inline"
        className="Menu"
      >
        <Menu.Item>
          <Link to="/admin/person">
            <HomeOutlined />
            账号信息
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/admin/person/aboutme">
            <HomeOutlined />
            关于我们
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
