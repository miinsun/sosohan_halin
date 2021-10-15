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
    <header className="sticky-top mb-3">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="text-primary" href="/"><CTLogo margin="1px" width="170px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/storelist">상점리스트</Nav.Link>
              <Nav.Link href="/couponManage">쿠폰관리</Nav.Link>
              <Nav.Link href="/link">연계할인관리</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
            <UserArea />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default TheHeader;
