/**
 * 应用根组件
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //路由(映射关系)
import Admin from "./pages/admin/admin.jsx";
import Login from "./pages/login/login.jsx";
import Forget from "./pages/forget/forget.jsx";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/forget" component={Forget} />
        </Switch>
      </Router>
    );
  } 
}
