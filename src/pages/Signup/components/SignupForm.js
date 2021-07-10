import React from "react";

const SignupForm = () => (
  <form className="register-form">
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="id">Id</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="id" className="form-control" type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">PW</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="password" className="form-control" type="password" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="confirmPassword">PW 확인</label>
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
    </div>
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="businessNum">사업자 등록번호</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="businessNum" className="form-control" type="text" />
      </div>
    </div>

    <div className="row">
      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
        <button type="button" className="btn btn-default">취소</button>
      </div>
      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
        <button type="submit" className="btn btn-default">가입</button>
      </div>
    </div>

  </form>
);

export default SignupForm;
