/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DoBtn from "../../LinkSuggestion/components/DoBtn";

class MyCouponList extends Component {
  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">쿠폰명</label>
          <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
          {/* <div id="nameHelp" className="form-text">We&apos;ll never share your email with anyone else.</div> */}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">쿠폰 설명</label>
          <input type="text" className="form-control" id="description" />
        </div>

        <div className="mb-3">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <DoBtn do="등록" />
        {/* 궁금한 점: <Link>는 페이지 이동에서만 사용하는건가? 이건 서버에서 처리가 필요한건데... */}
      </form>

    );
  }
}

export default MyCouponList;
