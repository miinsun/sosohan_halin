/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class MyCouponUsageList extends Component {
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
            <th scope="col">날짜</th>
            <th scope="col">쿠폰명</th>
            <th scope="col">사용 개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2021.07.09</th>
            <td>Mark</td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">2021.07.08</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">2021.07.05</th>
            <td>Larry the Bird</td>
            <td>112</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MyCouponUsageList;
