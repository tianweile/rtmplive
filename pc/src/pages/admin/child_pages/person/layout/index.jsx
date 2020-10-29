import React, { Component } from "react";
import Navigation from '../../../../../commponents/Navigation'
import "./layout.less"
export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="layout-left"><Navigation></Navigation></div>
       
        <div className="layout-right"> {this.props.children}</div>
       
      </div>
    );
  }
}
