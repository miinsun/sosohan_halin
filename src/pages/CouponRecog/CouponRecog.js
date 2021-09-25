/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Coupon from "../../Coupon";
import OneButton2 from "../../OneButton";
import Precautions from "./components/Precautions";

class CouponRecog extends Component {
  render() {
    return (
      <div className="CouponRecog container-sm themed-container">
        {/* <img></img> //로고 컴포넌트 */}
        <Coupon />
        <Precautions />
        <OneButton2 title="사용하기" />
      </div>
    );
  }
}

export default CouponRecog;
