import React, { Component } from "react";
import logo from "../../assets/logo.png";
import users from "../../assets/User_box.svg";
import active from "../../assets/Chart_fill.svg";
import transaction from "../../assets/Chart_alt.svg";
import apk from "../../assets/Setting_alt_line.svg";
export class left extends Component {
  render() {
    return (
      <div>
        <div className="left">
          <div className="heading">
            <img src={logo} className="logo_img"></img>
            <div className="cheaqueheading">cheaque</div>
          </div>
          <div className="titles">
            <div className="user_title active" id="myId">
              <img src={users} className="icon"></img>
              <div className="text">Users</div>
            </div>
            <div className="user_title " id="myId">
              <img src={active} className="icon"></img>
              <div className="text">Active cheaques</div>
            </div>
            <div className="user_title " id="myId">
              <img src={transaction} className="icon"></img>
              <div className="text">Transactions</div>
            </div>
            <div className="user_title" id="myId">
              <img src={apk} className="icon"></img>
              <div className="text">Apk</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default left;
