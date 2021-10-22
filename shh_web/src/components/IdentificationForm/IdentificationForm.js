import React from "react";
import { Link } from "react-router-dom";

const IdentificationForm = ({ btnTitle, onClick, handleChange }) => (
  <form className="WithdrawalForm mt-5">
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="curPassword">본인 확인을 위해 패스워드를 입력해 주세요.</label>
      <input name="password" className="form-control mt-3" type="password" onChange={handleChange} />
      <p />
    </div>
    <div className="text-center">
      {/* <Link className="btn btn-outline-secondary" to="/">취소</Link>{" "} */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="btn btn-primary" onClick={onClick}>{btnTitle}</Link>
    </div>
  </form>
);

export default IdentificationForm;
