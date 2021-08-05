import React from "react";
import { Link } from "react-router-dom";

const EditAccountForm = () => (
  <form className="register-form">
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="id">Id</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="id" className="form-control" type="text" disabled />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="curPassword">현재 PW</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="curPassword" className="form-control" type="password" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">새 PW</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="password" className="form-control" type="password" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="confirmPassword">새 PW 확인</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="confirmPassword" className="form-control" type="password" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">이름</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="name" className="form-control" type="text" disabled />
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        *개명 시 관리자에게 문의<br />
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
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="businessNum">사업자 등록번호</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="businessNum" className="form-control" type="text" disabled />
      </div>
    </div>

    <div className="row">
      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
        <Link className="btn btn-secondary" to="/">취소</Link>
      </div>
      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
        <Link className="btn btn-secondary" to="/editaccount">수정</Link>
      </div>
    </div>
  </form>
);

export default EditAccountForm;
