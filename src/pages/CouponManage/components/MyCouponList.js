/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../LinkReceptionHistory/components/LinkHistory.css";
import OneButton2 from "../../../OneButton";

class MyCouponList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">{this.props.no}</th>
            <th scope="col">{this.props.name}</th>
            <th scope="col">{this.props.description}</th>
            <th scope="col">{this.props.validity}</th>
            <th scope="col">{this.props.updateOrDelBtn}</th> */}
            <th scope="col">No</th>
            <th scope="col">쿠폰명</th>
            <th scope="col">쿠폰 설명</th>
            <th scope="col">유효기한</th>
            <th scope="col">수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><Link><OneButton2 title="수정" /></Link> <OneButton2 title="삭제" /></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><OneButton2 title="수정" /> <OneButton2 title="삭제" /></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td><OneButton2 title="수정" /> <OneButton2 title="삭제" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MyCouponList;
