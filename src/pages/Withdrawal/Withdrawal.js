import React from "react";
import MyPageSidebar from "../../MyPageSidebar";

import WithdrawalForm from "./components/WithdrawalForm";

const Withdrawal = () => (
  <div className="Withdrawal">
    <MyPageSidebar />
    <h3>회원 탈퇴</h3>
    <WithdrawalForm />
  </div>
);

export default Withdrawal;
