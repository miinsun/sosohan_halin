import React, { useEffect, useState } from "react";
import MyPageSideBar from "../../MyPageSidebar";
import {
  CTLoading, IdentificationForm, useLoading, useUser,
} from "../../components";

import EditAccountForm from "./components/EditAccountForm";

const sessionId = sessionStorage.getItem("sessionId");

const EditAccount = () => {
  const {
    user, userGet, userPut, userCheckPw,
  } = useUser();

  const [identified, setIdentified] = useState(false);
  const { loading, setLoading } = useLoading(true);

  const [password, setPassword] = useState("");

  const [data, setData] = useState({
    email: user.email,
    newPassword: "",
    newPasswordConfirm: "",
  });

  const [pwValidation, setPwValidation] = useState(0);
  const [pwConfirmValidation, setPwConfirmValidation] = useState(0);
  const [emailValidation, setEmailValidation] = useState(1);

  const validateUserPw = (pw) => {
    console.log(pw);
    const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*|/?])[A-Za-z\d`~!@#$%^&*|/?]{10,16}$/;
    if (pw.length === 0) { // 공백 -> 비번, 비번확인 다 0
      setPwValidation(0);
      setPwConfirmValidation(0);
    } else if (!regexPw.test(pw)) { // 형식에 안맞음 -> 비번: -1, 비번확인: 0
      setPwValidation(-1);
      setPwConfirmValidation(0);
    } else { // 공백이 아니며 형식에 맞음 -> 비번: 1, 비번확인: 일치하면 1 / 비일치하면 -1
      setPwValidation(1);
      if (pw === data.newPasswordConfirm) {
        setPwConfirmValidation(1);
      }
      if (pw !== data.newPasswordConfirm) {
        setPwConfirmValidation(-1);
      }
    }
  };

  const validateUserPwConfirm = (pwConfirm) => {
    console.log(pwConfirm);
    if (pwConfirm.length === 0 || pwValidation === -1) { // 공백 or 'password' 값 유효하지 않음 -> 0
      setPwConfirmValidation(0);
    } else if (pwConfirm !== data.newPassword) { // 비일치 -> -1
      setPwConfirmValidation(-1);
    } else if (pwValidation === 1) { // 일치 -> 1
      setPwConfirmValidation(1);
    }
  };

  const validateEmail = (email) => {
    console.log(email);
    const regexEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (email.length === 0) { // 공백 -> 0
      setEmailValidation(0);
    } else if (!regexEmail.test(email)) { // 형식에 안맞음 -> -1
      setEmailValidation(-1);
    } else { // 공백이 아니며 형식에 맞음 -> 1
      setEmailValidation(1);
    }
  };

  const handleCurpwChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "newPassword") {
      validateUserPw(e.target.value);
    } else if (e.target.name === "newPasswordConfirm") {
      validateUserPwConfirm(e.target.value);
    } else if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
  };

  const loadUpdateForm = async () => {
    try {
      const response = await userCheckPw(password);
      if (response.data === true) {
        setIdentified(true);
        const result = await userGet(sessionId);
        setData({
          ...data,
          email: result.data.email,
        });
        await setLoading(false);
      } else {
        alert("패스워드가 일치하지 않습니다.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateUser = async () => {
    try {
      console.log(data);

      if (pwValidation === -1 || pwConfirmValidation === -1 || emailValidation !== 1) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      await userPut({
        ...user,
        password: data.newPassword,
        email: data.email,
      });

      alert("수정이 완료되었습니다.");
      document.location.href = "/";

      // await userGet(user.businessUserId);
    } catch (err) {
      console.log(err);
      alert("수정 실패");
    }
  };

  return (
    <div className="EditAccount container">
      <MyPageSideBar />
      <div className="mx-auto col-6">
        <h4 className="mb-3">회원 정보 수정</h4>
        {/* eslint-disable-next-line no-nested-ternary */}
        {!identified
          ? <IdentificationForm btnTitle="확인" onClick={loadUpdateForm} handleChange={handleCurpwChange} />
          : loading ? <CTLoading /> : (
            <EditAccountForm
              updateUser={updateUser}
              handleChange={handleChange}
              user={user}
              pwValidation={pwValidation}
              pwConfirmValidation={pwConfirmValidation}
              emailValidation={emailValidation}
            />
          )}
      </div>
    </div>
    //   )
  );
};

export default EditAccount;
