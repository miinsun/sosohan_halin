import React from "react";
import {
  ProSidebar, Menu, MenuItem, SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

const MyPageSidebar = () => (
  // eslint-disable-next-line react/style-prop-object
  <div className="col-3">
    <ProSidebar id="sidebarOverrides">
      <p className="fs-3 text-center">마이페이지</p>
      <Menu iconShape="square">
        <SubMenu title="회원 정보 관리">
          <MenuItem>회원 정보 수정<Link to="/editAccount" /></MenuItem>
          <MenuItem>회원 탈퇴<Link to="/withdrawal" /></MenuItem>
        </SubMenu>
        <SubMenu title="내 상점 관리">
          <MenuItem>상점 등록<Link to="/storeregistration" /></MenuItem>
          <MenuItem>상점 수정/삭제<Link to="/storedeletemodifications" /></MenuItem>
        </SubMenu>
        <MenuItem>알림 설정</MenuItem>
      </Menu>
    </ProSidebar>
  </div>
);

export default MyPageSidebar;
