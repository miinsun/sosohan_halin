import React, { useState, useEffect } from "react";
import {
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const EditAccountForm = ({ updateUser, handleChange, user }) => (
  <form className="EditAccountForm mt-4">
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="businessUserId">ID</label>
      <input name="businessUserId" className="form-control" type="text" disabled value={user.businessUserId} />
      <p />
    </div>
    <div className="md-form">
      <span className="text-danger">*</span>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="curPassword">현재 패스워드</label>
      <input
        name="curPassword"
        className="form-control"
        type="password"
        onChange={handleChange}
      />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="password">새 패스워드</label>
      <input
        name="newPassword"
        className="form-control"
        type="password"
        onChange={handleChange}
        placeholder="변경을 원할 시에만 입력해 주세요."
      />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="passwordConfirm">새 패스워드 확인</label>
      <input
        name="newPasswordConfirm"
        className="form-control"
        type="password"
        onChange={handleChange}
        placeholder="변경할 패스워드를 한 번 더 입력해 주세요."
      />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="name">이름</label>
      <input name="name" className="form-control" type="text" disabled value={user.name} />
      <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="email">이메일</label>
      <input
        name="email"
        className="form-control"
        type="text"
        defaultValue={user.email}
        onChange={handleChange}
      />          <p />
    </div>
    <div className="md-form">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="businessNum">사업자 등록번호</label>
      <input name="businessNum" className="form-control" type="text" disabled value={user.businessNum} />
      <p />
    </div>

    <div className="text-center">
      {/* <Link className="btn btn-outline-secondary" to="/">취소</Link>{" "} */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Button className="btn btn-primary" onClick={updateUser}>수정</Button>
    </div>
  </form>
);

export default EditAccountForm;
