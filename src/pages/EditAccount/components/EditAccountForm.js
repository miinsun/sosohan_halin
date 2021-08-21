import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const EditAccountForm = () => {
  const { user, userPut } = useUser();

  const [data, setData] = useState({
    email: user.email,
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async () => {
    try {
      console.log(data);

      if (data.email.length <= 0 || data.newPassword.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      if (data.newPassword !== data.newPasswordConfirm) {
        alert("신규 패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
        return;
      }

      await userPut({
        // businessUserId: user.businessUserId,
        // password: data.newPassword,
        // name: user.name,
        // email: data.email,
        // businessNum: user.businessNum,
        // stores: user.stores,
        // state: user.state,
        ...user,
        password: data.newPassword,
        email: data.email,
      });

      // await userGet(user.businessUserId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    user ? (
      <form className="register-form">
        <div className="row">
          <div className="col-md-1 col-sm-1 col-lg-1">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="id">Id</label>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <input name="id" className="form-control" type="text" disabled value={user.businessUserId} />
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
            <input name="newPassword" className="form-control" type="password" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-1 col-lg-1">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="newPasswordConfirm">새 PW 확인</label>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <input name="newPasswordConfirm" className="form-control" type="password" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-sm-1 col-lg-1">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="name">이름</label>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <input name="name" className="form-control" type="text" disabled value={user.name} />
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
            <input
              name="email"
              className="form-control"
              type="text"
              defaultValue={user.email}
              onChange={handleChange}
            />
          </div>
          @
          <div className="col-md-2 col-sm-4 col-lg-2">
            <input name="email123" className="form-control" type="text" />
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
            <input name="businessNum" className="form-control" type="text" disabled value={user.businessNum} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
            <Link className="btn btn-secondary" to="/">취소</Link>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              className="btn btn-secondary"
              onClick={updateUser}
            >수정
            </Link>
          </div>
        </div>
      </form>
    ) : (
      <div>사용자 정보가 없습니다.</div>
    )
  );
};

export default EditAccountForm;
