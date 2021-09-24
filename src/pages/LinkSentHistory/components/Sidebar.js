/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/linkinhistory">
              <a className="nav-link active" aria-current="page" href="#">수신 제안 내역</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/linkouthistory">
              <a className="nav-link" href="#">발신 제안 내역</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
