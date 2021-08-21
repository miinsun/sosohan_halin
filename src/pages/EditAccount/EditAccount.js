import React, { useEffect } from "react";
import MyPageSideBar from "../../MyPageSidebar";
import { useUser } from "../../components";

import EditAccountForm from "./components/EditAccountForm";

const EditAccount = () => {
  const { userGet } = useUser();

  useEffect(() => {
    const fetch = async () => {
      try {
        await userGet("test");
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div className="EditAccount">
      <MyPageSideBar />
      <h3>회원 정보 수정</h3>
      <EditAccountForm />
    </div>
  );
};

export default EditAccount;
