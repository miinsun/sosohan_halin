import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useUser } from "../../../components";

const FindingIdForm = forwardRef((props, ref) => {
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

  useImperativeHandle(ref, () => ({
    submit() {
      findId();
    },
  }));

  return (
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
        <input name="email" className="form-control" type="password" onChange={handleChange} />
        <p />
      </div>
    </form>
  );
});

export default FindingIdForm;
