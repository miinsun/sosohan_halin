/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
// import Sidebar from "./components/Sidebar";
import { CTOneButton, useCoupon } from "../../components";
import CouponRegisterForm from "./components/CouponRegisterForm";
import MyCouponList from "./components/MyCouponList";

const CouponManage = () => (
  <div className="CouponManage">
    {/* <Sidebar /> */}
    <h1>쿠폰 관리</h1>

    {/* <Example btnName="+ 등록하기" confirmBtn="등록" /> */}

    <CouponRegisterForm couponInfo={null} />
    <MyCouponList />
  </div>
);
export default CouponManage;
