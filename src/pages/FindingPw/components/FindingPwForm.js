import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const FindingPwForm = () => {
  const { userFindingPw } = useUser();

  const [data, setData] = useState({
    businessUserId: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const findPw = async () => {
    try {
      console.log(data);

      if (data.businessUserId.length <= 0 || data.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      await userFindingPw(data.businessUserId, data.email);
      document.location.href = "/findingpw/result";
    } catch (err) {
      alert("일치하는 회원이 없습니다.");
      console.log(err);
    }
  };

  return (
    <form className="FindingPwForm">
      ID <input type="text" name="businessUserId" onChange={handleChange} /><br />
      등록된 이메일 <input type="text" name="email" onChange={handleChange} />
      <Link to="/login" className="btn btn-secondary">취소</Link>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link onClick={findPw} className="btn btn-secondary">임시 비밀번호 발급</Link>
    </form>
  );
};

export default FindingPwForm;
