import React, { useState } from "react";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText,
} from "reactstrap";
import { CTLogo } from "../components";
import { UserArea } from "./components";

const TheHeader = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">
          <CTLogo />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar className="me-auto mb-2 mb-md-0">
          <Nav navbar>
            <NavItem>
              <NavLink href="/storelist">상점리스트</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/couponmanage">쿠폰관리</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/linkreceptionhistory">연계 할인 관리</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText className="d-none d-md-block">
          <UserArea />
        </NavbarText>
      </Navbar>
    </header>
  );
};

export default TheHeader;