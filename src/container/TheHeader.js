import React, { useState } from "react";
// import {
//   Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,

//   // NavbarText,
// } from "react-bootstrap";
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button, Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CTLogo } from "../components";
import { UserArea } from "./components";

const TheHeader = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
  // <header>
  //   <Navbar color="light" light expand="md">
  //     <NavbarBrand href="/" className="mr-auto">
  //       <CTLogo />
  //     </NavbarBrand>
  //     <NavbarToggler onClick={toggleNavbar} />
  //     <Collapse isOpen={!collapsed} navbar className="me-auto mb-2 mb-md-0">
  //       <Nav navbar>
  //         <NavItem>
  //           <Nav.Link to="/storelist">상점리스트</Nav.Link>
  //         </NavItem>
  //         <NavItem>
  //           {/* <NavLink href="#">쿠폰관리</NavLink> */}
  //           <Link to="/couponManage">쿠폰관리</Link>
  //         </NavItem>
  //         <NavItem>
  //           <Link to="/linkinhistory">연계 할인 관리</Link>
  //         </NavItem>
  //       </Nav>
  //     </Collapse>
  //     <NavbarText className="d-none d-md-block">
  //       <UserArea />
  //     </NavbarText>
  //   </Navbar>
  // </header>

    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">소소한 할인</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/storelist">상점리스트</Nav.Link>
              <Nav.Link href="/couponManage">쿠폰관리</Nav.Link>
              <Nav.Link href="/linkinhistory">연계할인관리</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default TheHeader;
