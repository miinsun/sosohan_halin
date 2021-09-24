import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const FindingIdForm = () => {
  const { userFindingId } = useUser();

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const findId = async () => {
    try {
      console.log(data);

      if (data.name.length <= 0 || data.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      const response = await userFindingId(data.name, data.email);
      document.location.href = `/findingid/result/${response.data}`;
    } catch (err) {
      alert("일치하는 회원이 없습니다.");
      console.log(err);
    }
  };

  return (
    <form className="FindingIdForm">
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
        <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
          <Link to="/login" className="btn btn-secondary">취소</Link>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-secondary" onClick={findId}>아이디 찾기</Link>
        </div>
      </div>
    </form>
  );
};

export default FindingIdForm;
