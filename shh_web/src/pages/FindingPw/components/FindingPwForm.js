import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const FindingPwForm = ({ handleChange }) => (
  <form className="FindingPwForm">
    <p>가입 정보를 입력하세요.</p>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="businessUserId">ID</label>
      <input name="businessUserId" className="form-control" type="text" onChange={handleChange} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="email">등록된 이메일</label>
      <input name="email" className="form-control" type="text" onChange={handleChange} />
      <p />
    </div>
  </form>
);

export default FindingPwForm;
