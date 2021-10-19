import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useUser } from "../../../components";

const FindingIdForm = ({ handleChange }) => (
  <form className="FindingForm">
    <p>가입 정보를 입력하세요.</p>
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
  </form>
);

export default FindingIdForm;
