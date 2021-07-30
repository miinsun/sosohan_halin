import React from "react";

import MyPageSideBar from "../../MyPageSidebar";
import EditAccountForm from "./components/EditAccountForm";

const EditAccount = () => (
  <div className="EditAccount">
    <MyPageSideBar />
    <h3>회원 정보 수정</h3>
    <EditAccountForm />
  </div>
);

export default EditAccount;
