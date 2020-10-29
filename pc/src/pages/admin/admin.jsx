import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import memoryUtils from "../../utils/memoryUtils";
import Home from "./child_pages/home";
import Live from "./child_pages/live";
import Ptz from "./child_pages/ptz";
import Im from "./child_pages/im";
import Layout from "./child_pages/layout";
import Person from "./child_pages/person/";
export default class Admin extends Component {
  render() {
    //读取保存的user，如果不存在，直接跳转到登录界面
    const user = memoryUtils.user;
    if (!user.username) {
      //自动跳转到指定的路由路径
      return <Redirect to="/login" />;
    }
    return (
      /**路由跳转 */
      <Layout>
        <Switch>
          
          {/* 加exact使得一进'/'地址就加载home界面 */}
          <Route exact path="/admin" component={Home} />
          <Route path="/admin/live" component={Live} />
          {/* path:网页路由  component:jsx文件中class名（首字母大写） */}
          <Route path="/admin/ptz" component={Ptz} />
          <Route path="/admin/im" component={Im} />
          <Route path="/admin/person" component={Person} />
          <Route render={() => <div>404</div>}></Route>
        </Switch>
      </Layout>
    );
  }
}
