/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
// import Sidebar from "./components/Sidebar";
import MyCouponUsageList from "./components/MyCouponUsageList";

class CouponUsage extends Component {
  render() {
    return (
      <div className="CouponUsage">
        {/* <Sidebar /> */}
        <h1>쿠폰 관리 - 사용 내역</h1>
        <MyCouponUsageList />
      </div>
    );
  }
}

export default CouponUsage;
