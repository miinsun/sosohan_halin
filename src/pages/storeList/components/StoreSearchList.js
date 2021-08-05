/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const StoreSearchList = () => (
  <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div className="col-auto d-none d-lg-block">
      <Link to="/storeDetail"><img src="https://lab.hanium.or.kr/uploads/-/system/appearance/header_logo/1/content_logo.png" /></Link>
    </div>

    <div className="col p-4 d-flex flex-column position-static">
      <strong className="d-inline-block mb-2 text-success">카테고리</strong>
      <Link to="/storeDetail"><h3 className="mb-0">가게명</h3></Link>
      <div className="mb-1 text-muted">한줄소개</div>
      <div className="mb-1 text-muted">위치</div>
    </div>
  </div>
);

export default StoreSearchList;
