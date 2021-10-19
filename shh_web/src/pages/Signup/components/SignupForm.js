import React from "react";

const SignupForm = ({ handleChange }) => (
  <form className="SignupForm">
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="businessUserId">ID</label>
      <input name="businessUserId" className="form-control" type="text" onChange={handleChange} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="password">패스워드</label>
      <input name="password" className="form-control" type="password" onChange={handleChange} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="passwordConfirm">패스워드 확인</label>
      <input name="passwordConfirm" className="form-control" type="password" onChange={handleChange} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="name">이름</label>
      <input name="name" className="form-control" type="text" onChange={handleChange} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="email">이메일</label>
      <input name="email" className="form-control" type="text" onChange={handleChange} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="businessNum">사업자 등록번호</label>
      <input name="businessNum" className="form-control" type="text" onChange={handleChange} />
      <p />
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="defaultCheck12" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="defaultCheck12" className="grey-text">Accept the
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="blue-text"> Terms and Conditions</a>
      </label>
    </div>

  </form>
);

export default SignupForm;
