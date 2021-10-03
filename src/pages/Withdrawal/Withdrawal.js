import React from "react";
import MyPageSidebar from "../../MyPageSidebar";

import WithdrawalForm from "./components/WithdrawalForm";

const Withdrawal = () => (

  <div className="Withdrawal">
    <MyPageSidebar />
    <div className="mx-auto col-6">
      <h3>회원 탈퇴</h3>
      <WithdrawalForm />
    </div>
  </div>
);

export default Withdrawal;
