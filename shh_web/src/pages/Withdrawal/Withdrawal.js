import React from "react";
import MyPageSidebar from "../../MyPageSidebar";

import WithdrawalForm from "./components/WithdrawalForm";

const Withdrawal = () => (

  <div className="Withdrawal">
    <MyPageSidebar />
    <div className="mx-auto col-6">
      <h4 className="mb-3">회원 탈퇴</h4>
      <WithdrawalForm />
    </div>
  </div>
);

export default Withdrawal;
