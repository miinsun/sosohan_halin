/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class Sidebar extends Component {
  render() {
    // eslint-disable-next-line no-return-assign
    const handleSelect = (eventKey) => window.location.href = (`${eventKey}`);

    return (
      <>
        <div className="fs-3 mb-3 mx-5 text-dark"> 연계 관리 </div>
        {/* <div className="title mb-3 text-primary"> 연계 관리 </div> */}
        <Nav variant="tabs" defaultActiveKey="/link" onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="/link">진행 중</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/linkreception">수신 제안</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/linksent">발신 제안</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }
}

export default Sidebar;
