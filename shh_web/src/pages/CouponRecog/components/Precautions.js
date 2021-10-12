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
          <Card.Title style={{ color: "red", fontSize: "15px" }}>
            <ExclamationOctagon style={{ paddingBottom: "2px", paddingTop: "0px" }} /> 주의사항
          </Card.Title>
          <Card.Text className="sm text-muted">
            <ul style={{ paddingLeft: "0px" }}>
              <li className="list-unstyled"><Dot />&apos;사용하기&apos; 버튼 클릭 후 환불이 불가능합니다.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Precautions;
