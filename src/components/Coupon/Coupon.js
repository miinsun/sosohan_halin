/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class Coupon extends Component {
  render() {
    return (
      <div className="Coupon">
        <div className="container" style={{ border: "1px solid black" }}>
          <div className="card mb-3" style={{ width: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="..." className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">매장명</p>
                  <h5 className="card-title">쿠폰명</h5>
                  <p className="card-text">쿠폰 설명 어쩌구 저쩌구~~~~~~~~~~~~~~~~~~~~~~~</p>
                  <p className="card-text"><small className="text-muted">(유효기간)2021.07.10~2021.08.21</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coupon;
