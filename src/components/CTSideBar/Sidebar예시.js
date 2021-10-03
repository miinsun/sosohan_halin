/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import CTSideBarMain from "./CTSideBarMain";
import CTSideBarSub from "./CTSideBarSub";
import CTSideBar from ".";

class Sidebar2 extends Component {
  render() {
    return (
      <CTSideBar>
        <CTSideBarMain hasSub={false} id="2" content="발신 제안 내역" icon="fa-user-circle" url="/linkouthistory" />
      </CTSideBar>
    );
  }
}

export default Sidebar2;
