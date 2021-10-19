import React from "react";
import { Link } from "react-router-dom";

const WithdrawalForm = ({ withdraw, handleChange }) => (
  <form className="WithdrawalForm">
    <div className="mt-4 md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="curPassword">패스워드를 입력하세요.</label>
      <input name="password" className="form-control" type="password" onChange={handleChange} />
      <p />
    </div>
    <div className="text-center">
      {/* <Link className="btn btn-outline-secondary" to="/">취소</Link>{" "} */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="btn btn-primary" onClick={withdraw}>탈퇴</Link>
    </div>
  </form>
);

export default WithdrawalForm;
