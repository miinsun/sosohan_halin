import React, { useState } from "react";
import MyPageSidebar from "../../MyPageSidebar";
import { useUser } from "../../components";

// import WithdrawalForm from "./components/WithdrawalForm";
import IdentificationForm from "../../components/IdentificationForm";

const Withdrawal = () => {
  const { user, userCheckPw, userRemove } = useUser();

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

      const response = await userCheckPw(data.password);
      if (response.data === false) {
        alert("패스워드가 일치하지 않습니다.");
        return;
      }

      // eslint-disable-next-line no-restricted-globals
      const confirmResult = confirm("정말로 탈퇴하시겠습니까?");
      if (confirmResult === true) {
        await userRemove(sessionStorage.getItem("sessionId"));
        sessionStorage.removeItem("sessionId");
        alert("탈퇴가 완료되었습니다.");
        document.location.href = "/";
      }
    } catch (err) {
      // alert("패스워드가 일치하지 않습니다.");
      console.log(err);
    }
  };

  return (

    <div className="Withdrawal">
      <MyPageSidebar />
      <div className="mx-auto col-6">
        <h4 className="mb-3">회원 탈퇴</h4>
        {/* <WithdrawalForm withdraw={withdraw} handleChange={handleChange} /> */}
        <IdentificationForm btnTitle="탈퇴" onClick={withdraw} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Withdrawal;
