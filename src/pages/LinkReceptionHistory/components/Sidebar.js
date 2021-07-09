/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="content-categories">
          <div className="label-wrapper">
            <input className="nav-item" name="nav" type="radio" id="opt-1" />
            <label className="category" htmlFor="opt-1">
              연계 서비스 내역
            </label>
          </div>
          <div className="label-wrapper">
            <input
              className="nav-item"
              name="nav"
              type="radio"
              id="opt-2"
              checked=""
            />
            <label className="category" htmlFor="opt-2">
              내 연계 제안 내역
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
