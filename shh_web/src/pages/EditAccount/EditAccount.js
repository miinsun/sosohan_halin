import React, { useEffect, useState } from "react";
import MyPageSideBar from "../../MyPageSidebar";
import { CTLoading, useLoading, useUser } from "../../components";

import EditAccountForm from "./components/EditAccountForm";

const sessionId = sessionStorage.getItem("sessionId");

const EditAccount = () => {
  const { user, userGet, userPut } = useUser();
  const { loading, setLoading } = useLoading(true);

  const [data, setData] = useState({
    email: user.email,
    curPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await userGet(sessionId);
        setData({
          ...data,
          email: result.data.email,
        });
      } catch (err) {
        console.log(err);
      } finally {
        await setLoading(false);
      }
    };
    fetch();
  }, []);

  const updateUser = async () => {
    try {
      console.log(data);

      if (data.curPassword.length <= 0) {
        alert("현재 패스워드를 입력해 주세요.");
        return;
      }

      if (data.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      if (data.newPassword !== data.newPasswordConfirm) {
        alert("신규 패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
        return;
      }

      await userPut(data.curPassword, {
        ...user,
        password: data.newPassword,
        email: data.email,
      });

      alert("수정이 완료되었습니다.");
      document.location.href = "/";

      // await userGet(user.businessUserId);
    } catch (err) {
      console.log(err);
      alert("현재 패스워드가 일치하지 않습니다.");
    }
  };

  return (
    loading ? <CTLoading />
      : (
        <div className="EditAccount container">
          <MyPageSideBar />
          <div className="mx-auto col-6">
            <h4 className="mb-3">회원 정보 수정</h4>
            <EditAccountForm
              updateUser={updateUser}
              handleChange={handleChange}
              user={user}
              data={data}
              setData={setData}
            />
          </div>
        </div>
      )
  );
};

export default EditAccount;
