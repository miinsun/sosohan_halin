import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const WithdrawalForm = () => {
  const { user, userRemove } = useUser();

  const [data, setData] = useState({
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const withdraw = async () => {
    try {
      console.log(data);

      if (data.password.length <= 0) {
        alert("패스워드를 입력해 주세요.");
        return;
      }

      await userRemove(user.businessUserId, data.password);
      sessionStorage.removeItem("sessionId");
      alert("탈퇴가 완료되었습니다.");
      document.location.href = "/";
    } catch (err) {
      alert("패스워드를 확인해 주세요.");
      console.log(err);
    }
  };

  return (
    <form className="WithdrawalForm">
      <div className="row">
        <div className="col-md-1 col-sm-1 col-lg-1">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="curPassword">PW 입력</label>
        </div>
        <div className="col-md-4 col-sm-4 col-lg-4">
          <input name="password" className="form-control" type="password" onChange={handleChange} />
        </div>
        <div>
          <Link className="btn btn-secondary" to="/">취소</Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-secondary" onClick={withdraw}>탈퇴</Link>
        </div>
      </div>
    </form>
  );
};

export default WithdrawalForm;
