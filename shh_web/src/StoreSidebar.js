import React from "react";
import {
  ProSidebar, Menu, MenuItem, SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

const StoreSidebar = () => (
  // eslint-disable-next-line react/style-prop-object
  <div className="col-3">
    <ProSidebar id="sidebarOverrides">
      <p className="fs-3 text-center">상점 리스트</p>
      <Menu iconShape="square">
        <MenuItem>상점 검색<Link to="/storelist" /></MenuItem>
      </Menu>
    </ProSidebar>
  </div>
);

export default StoreSidebar;
