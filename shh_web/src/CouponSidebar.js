import React from "react";
import {
  ProSidebar, Menu, MenuItem, SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

const CouponSidebar = () => (
  // eslint-disable-next-line react/style-prop-object
  <div className="col-3">
    <ProSidebar id="sidebarOverrides">
      <p className="fs-3 text-center">쿠폰 관리</p>
      <Menu iconShape="square">
        <MenuItem>쿠폰 등록<Link to="/couponManage" /></MenuItem>
        <MenuItem>사용 내역</MenuItem>
      </Menu>
    </ProSidebar>
  </div>
);

export default CouponSidebar;
