import React, { Component } from "react";
import "./live.less";
import Videolive from "../../../../commponents/Videolive";
export default class Live extends Component {
  render() {
    return (
      <div className="box">
        <Videolive></Videolive>
      </div>
    );
  }
}
