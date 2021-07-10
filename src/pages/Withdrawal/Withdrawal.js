import React from "react";

import WithdrawalForm from "./components/WithdrawalForm";

const Withdrawal = () => (
  <div className="Withdrawal">
    <h3>회원 탈퇴</h3>
    <WithdrawalForm />
    <button type="button">취소</button><button type="button">탈퇴</button>
  </div>
);

export default Withdrawal;
