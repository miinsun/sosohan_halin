import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const FindingPwForm = forwardRef((props, ref) => {
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
      // eslint-disable-next-line react/no-this-in-sfc
      this.forceUpdate();
    } catch (err) {
      alert("일치하는 회원이 없습니다.");
      console.log(err);
    }
  };

  useImperativeHandle(ref, () => ({
    submit() {
      findPw();
    },
  }));

  return (
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
        <input name="email" className="form-control" type="password" onChange={handleChange} />
        <p />
      </div>
    </form>
  );
});

export default FindingPwForm;
