import React from "react";
import { Link } from "react-router-dom";
import MyPageSidebar from "../../MyPageSidebar";

import WithdrawalForm from "./components/WithdrawalForm";

const Withdrawal = () => (
  <div className="Withdrawal">
    <MyPageSidebar />
    <h3>회원 탈퇴</h3>
    <WithdrawalForm />
    <Link className="btn btn-secondary" to="/">취소</Link>
    <Link className="btn btn-secondary" to="/">탈퇴</Link>
  </div>
);

export default Withdrawal;
