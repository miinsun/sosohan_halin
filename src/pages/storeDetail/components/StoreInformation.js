/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export class Storeinformation extends Component {
  render() {
    return (
      <div>
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col-auto d-none d-lg-block">
            <img src="https://lab.hanium.or.kr/uploads/-/system/appearance/header_logo/1/content_logo.png" />
          </div>

          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">카테고리</strong>
            <h3 className="mb-0">가게명</h3>
            <div className="mb-1 text-muted">한줄소개</div>
            <div className="mb-1 text-muted">위치</div>
            <div className="mb-1 text-muted">연락처</div>
            <hr color="gray" align="left" size="5" />
            <div className="mb-1 text-muted">쿠폰리스트</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Storeinformation;
