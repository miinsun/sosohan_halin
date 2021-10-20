import { List } from "immutable";
import React, { useEffect, useState } from "react";
// import "../../styles/form-sign.css";
import { useCookies } from "react-cookie";
import { useUser } from "../../components";
import FindingIdModal from "./components/FindingIdModal";
import FindingPwModal from "./components/FindingPwModal";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

const UserModal = ({
  close, show,
}) => {
  const {
    userLogin, userSignup, userFindingId, userFindingPw, userCheckId, isIdExisting,
  } = useUser();

  // modal initialize
  const [modalPage, setModalPage] = useState("login");
  const [foundId, setFoundId] = useState(null);
  const [isPwFound, setIsPwFound] = useState(false);

  const [defaultId, setDefaultId] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberedId"]);

  const initializeModal = () => {
    setModalPage("login");
    setFoundId(null);
    setIsPwFound(false);
  };

  // modal form data
  const [loginData, setLoginData] = useState({
    businessUserId: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    businessUserId: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    businessNum: "",
  });

  const [findingIdData, setfindingIdData] = useState({
    name: "",
    email: "",
  });

  const [findingPwData, setFindingPwData] = useState({
    businessUserId: "",
    email: "",
  });

  const handleLoginChange = (e) => {
    if (e.target.name === "rememberMe") {
      setIsChecked(e.target.checked);
    } else {
      setLoginData({
        ...loginData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFindingIdChange = (e) => {
    setfindingIdData({
      ...findingIdData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFindingPwChange = (e) => {
    setFindingPwData({
      ...findingPwData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      if (loginData.businessUserId.length <= 0 || loginData.password.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      const response = await userLogin(loginData.businessUserId, loginData.password);
      sessionStorage.setItem("sessionId", response.data);
      if (isChecked === true) {
        setCookie("rememberedId", response.data, { maxAge: 2000 });
      } else if (cookies.rememberedId !== undefined) {
        removeCookie("rememberedId");
      }
      document.location.href = "/";
    } catch (e) {
      alert("로그인 정보를 확인해 주세요.");
      console.log(e);
    }
  };

  const signup = async () => {
    try {
      if (signupData.businessUserId.length <= 0 || signupData.name.length <= 0
        || signupData.email.length <= 0 || signupData.password.length <= 0) {
        alert("필수적인 정보를 입력해 주세요.");
        return;
      }

      const response = await userCheckId(signupData.businessUserId);
      if (response.data === true) {
        alert("이미 존재하거나 탈퇴한 회원의 아이디입니다.");
        return;
      }

      if (signupData.password !== signupData.passwordConfirm) {
        alert("패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
        return;
      }

      if (signupData.businessNum.length !== 10) {
        alert("사업자 등록번호의 길이가 형식에 맞지 않습니다.");
        return;
      }

      // await userSignup({
      //   businessUserId: signupData.businessUserId,
      //   password: signupData.password,
      //   name: signupData.name,
      //   email: signupData.email,
      //   businessNum: signupData.businessNum,
      //   stores: List([]),
      //   state: 1,
      // });
    } catch (e) {
      alert(e);
      console.log(e);
    }

    alert("가입이 완료되었습니다.");
    document.location.href = "/";
  };

  const findId = async () => {
    try {
      if (findingIdData.name.length <= 0 || findingIdData.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      const response = await userFindingId(findingIdData.name, findingIdData.email);
      setFoundId(response.data);
    } catch (e) {
      alert("일치하는 회원이 없습니다.");
      console.log(e);
    }
  };

  const findPw = async () => {
    try {
      if (findingPwData.businessUserId.length <= 0 || findingPwData.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      await userFindingPw(findingPwData.businessUserId, findingPwData.email);
      setIsPwFound(true);
    } catch (e) {
      alert("일치하는 회원이 없습니다.");
      console.log(e);
    }
  };

  useEffect(() => {
    if (cookies.rememberedId !== undefined) {
      setDefaultId(cookies.rememberedId);
      setIsChecked(true);
      setLoginData({
        ...loginData,
        businessUserId: cookies.rememberedId,
      });
    }
  }, []);

  return (
    <>
      {modalPage === "login" && (
        <LoginModal
          login={login}
          handleChange={handleLoginChange}
          show={show}
          close={close}
          setModalPage={setModalPage}
          initializeModal={initializeModal}
          isChecked={isChecked}
          defaultId={defaultId}
        />
      )}
      {modalPage === "signup" && (
        <SignupModal
          signup={signup}
          handleChange={handleSignupChange}
          show={show}
          close={close}
          setModalPage={setModalPage}
          initializeModal={initializeModal}
        />
      )}
      {modalPage === "findingId" && (
        <FindingIdModal
          findId={findId}
          handleChange={handleFindingIdChange}
          show={show}
          close={close}
          foundId={foundId}
          setModalPage={setModalPage}
          initializeModal={initializeModal}
        />
      )}
      {modalPage === "findingPw" && (
        <FindingPwModal
          findPw={findPw}
          handleChange={handleFindingPwChange}
          show={show}
          close={close}
          isPwFound={isPwFound}
          setModalPage={setModalPage}
          initializeModal={initializeModal}
        />
      )}
    </>

  );
};
export default UserModal;
