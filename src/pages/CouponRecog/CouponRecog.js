/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLogo, Coupon } from "../../components";
import Precautions from "./components/Precautions";

const CouponRecog = ({ put }) => {
  <div className="CouponRecog container-sm themed-container">
    <CTLogo />
    <Coupon />
    <Precautions />
    <a className="btn btn-primary" onClick={() => put(data)}>
      사용하기
    </a>
  </div>;
};

export default CouponRecog;
