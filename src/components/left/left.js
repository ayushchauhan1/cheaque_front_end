import React, { Component } from "react";
import logo from "../../assets/logo.png";
import users from "../../assets/User_box.svg";
import active from "../../assets/Chart_fill.svg";
import transaction from "../../assets/Chart_alt.svg";
import apk from "../../assets/Setting_alt_line.svg";
import { Link } from "react-router-dom";
export class left extends Component {
  render() {
    const pathname = window?.location?.pathname;
    return (
      <div>
        <div className="left">
          <div className="heading">
            <img src={logo} className="logo_img"></img>
            <div className="cheaqueheading">cheaque</div>
          </div>
          <div className="titles">
            <div
              className={`${
                pathname === "/" ? "active user_title" : "user_title"
              }`}
              id="myId"
            >
              <img src={users} className="icon"></img>
              <div className="text">
                <Link to="/">Users</Link>
              </div>
            </div>

            <div
              className={`${
                pathname === "/active" ? "active user_title" : "user_title"
              }`}
              id="myId"
            >
              <img src={active} className="icon"></img>
              <div className="text">
                <Link to="/active">Active cheaques</Link>
              </div>
            </div>
            <div
              className={`${
                pathname === "/transactions"
                  ? "active user_title"
                  : "user_title"
              }`}
              id="myId"
            >
              <img src={transaction} className="icon"></img>
              <div className="text">
                <Link to="/transactions">Transactions</Link>
              </div>
            </div>
            <div
              className={`${
                pathname === "/apk" ? "active user_title" : "user_title"
              }`}
              id="myId"
            >
              <img src={apk} className="icon"></img>
              <div className="text">
                {" "}
                <Link to="/apk">apk</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default left;
