import React, { useState } from "react";
import MyPageSidebar from "../../MyPageSidebar";
import { useUser } from "../../components";

import WithdrawalForm from "./components/WithdrawalForm";

const Withdrawal = () => {
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

    <div className="Withdrawal">
      <MyPageSidebar />
      <div className="mx-auto col-6">
        <h4 className="mb-3">회원 탈퇴</h4>
        <WithdrawalForm withdraw={withdraw} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Withdrawal;
