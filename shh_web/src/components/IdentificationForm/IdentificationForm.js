import React from "react";
import { Button } from "react-bootstrap";

const IdentificationForm = ({ btnTitle, onClick, handleChange }) => (
  <form className="WithdrawalForm mt-5">
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="curPassword">본인 확인을 위해 패스워드를 입력해 주세요.</label>
      <input name="password" className="form-control mt-3" type="password" onChange={handleChange} />
      <p />
    </div>
    <div className="text-center">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Button variant="outline-primary" onClick={onClick}>{btnTitle}</Button><br />

    </div>
  </form>
);

export default IdentificationForm;
