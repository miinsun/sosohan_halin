import { List } from "immutable";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const SignupForm = () => {
  const { userSignup } = useUser();

  const [data, setData] = useState({
    businessUserId: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    businessNum: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async () => {
    try {
      console.log(data);

      if (data.businessUserId.length <= 0 || data.name.length <= 0
        || data.email.length <= 0 || data.password.length <= 0) {
        alert("필수적인 정보를 입력해 주세요.");
        return;
      }

      if (data.password !== data.passwordConfirm) {
        alert("패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
        return;
      }

      if (data.businessNum.length !== 10) {
        alert("사업자 등록번호의 길이가 형식에 맞지 않습니다.");
        return;
      }

      await userSignup({
        businessUserId: data.businessUserId,
        password: data.password,
        name: data.name,
        email: data.email,
        businessNum: data.businessNum,
        stores: List([]),
        state: 1,
      });
    } catch (err) {
      alert(err);
      console.log(err);
    }

    alert("가입이 완료되었습니다.");
    document.location.href = "/";
  };

  return (
    <form className="register-form">
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="id">Id</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="businessUserId" className="form-control" type="text" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">PW</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="password" className="form-control" type="password" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="confirmPassword">PW 확인</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="passwordConfirm" className="form-control" type="password" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">이름</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="name" className="form-control" type="text" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">이메일</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="email" className="form-control" type="text" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessNum">사업자 등록번호</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="businessNum" className="form-control" type="text" onChange={handleChange} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
          <Link className="btn btn-secondary" to="/login">취소</Link>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            className="btn btn-secondary"
            onClick={signup}
          >가입
          </Link>
        </div>
      </div>

    </form>
  );
};

export default SignupForm;
