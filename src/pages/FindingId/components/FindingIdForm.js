import React from "react";
import { Link } from "react-router-dom";

const FindingIdForm = () => (
  <form className="FindingIdForm">
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">이름</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="name" className="form-control" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">이메일</label>
      </div>
      <div className="col-md-2 col-sm-4 col-lg-2">
        <input name="email" className="form-control" type="text" />
      </div>
      @
      <div className="col-md-2 col-sm-4 col-lg-2">
        <input name="email" className="form-control" type="text" />
      </div>
      <div className="col-md-2 col-sm-4 col-lg-2">
        <select>
          <option>직접 입력</option>
          <option>naver.com</option>
          <option>gmail.com</option>
          <option>daum.net</option>
          <option>hanmail.net</option>
          <option>nate.com</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
        <Link to="/login" className="btn btn-secondary">취소</Link>
      </div>
      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
        <Link to="/findingid/result" className="btn btn-secondary">아이디 찾기</Link>
      </div>
    </div>
  </form>
);

export default FindingIdForm;
