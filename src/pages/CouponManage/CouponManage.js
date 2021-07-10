/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
// import Sidebar from "./components/Sidebar";
import MyCouponList from "./components/MyCouponList";
import OneButton from "../../OneButton";

class CouponManage extends Component {
  render() {
    return (
      <div className="CouponManage">
        {/* <Sidebar /> */}
        <h1>쿠폰 관리</h1>
        <OneButton title="+ 등록하기" />
        <MyCouponList />
      </div>
    );
  }
}

export default CouponManage;
