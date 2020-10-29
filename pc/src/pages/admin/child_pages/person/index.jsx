import React, { Component } from "react";
import memoryUtils from "../../../../utils/memoryUtils";
import Layout from "./layout";
import "./person.less";
import { Route, Switch } from "react-router-dom";
import Aboutme from "./aboutme";
import Personal from "./personal";
import "../../../../css/com.less";
export default class Person extends Component {
  render() {
    const user = memoryUtils.user;
    return (
      <div className="person com" >
        <div className="person_title">
          <text>欢迎{user.username}来到RTMP视频直播系统~</text>
        </div>
        <Layout>
          <Switch>
            {/* 加exact使得一进'/'地址就加载home界面 */}
            <Route exact path="/admin/person/" component={Personal} />
            <Route path="/admin/person/aboutme" component={Aboutme} />
            <Route render={() => <div>404</div>}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}
