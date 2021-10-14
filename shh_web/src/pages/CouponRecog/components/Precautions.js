/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import {
  Card,
} from "react-bootstrap";
import { ExclamationOctagon, Dot } from "react-bootstrap-icons";

class Precautions extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title style={{ color: "#f87171", fontSize: "15px", fontWeight: "bold" }}>
            <ExclamationOctagon style={{ paddingBottom: "2px", paddingTop: "0px" }} /> 주의사항
          </Card.Title>
          <Card.Text className="sm text-muted">
            <ul style={{ paddingLeft: "0px", fontSize: "10px" }}>
              <li className="list-unstyled"><Dot />&apos;사용하기&apos; 버튼 클릭 후 환불이 불가능합니다.</li>
              <li className="list-unstyled"><Dot />판매자의 사정에 의해 쿠폰이 조기 마감될 수 있습니다.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Precautions;
