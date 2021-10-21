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

  const [idValidation, setIdValidation] = useState(0);
  const [pwValidation, setPwValidation] = useState(0);
  const [pwConfirmValidation, setPwConfirmValidation] = useState(0);
  const [emailValidation, setEmailValidation] = useState(0);
  const [busiNumValidation, setBusiNumValidation] = useState(0);

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

  const validateUserId = async (id) => {
    console.log(id);
    if (id.length === 0) {
      setIdValidation(0);
    } else if (id.length < 5) {
      setIdValidation(-1);
    } else {
      const response = await userCheckId(id);
      if (response.data === true) {
        setIdValidation(-2);
      } else {
        setIdValidation(1);
      }
    }
  };

  const validateUserPw = (pw) => {
    console.log(pw);
    if (pw.length === 0) { // 아무것도 없음 -> 비번, 비번확인 다 0
      setPwValidation(0);
      setPwConfirmValidation(0);
    } else if (pw.length < 10) { // 길이가 짧음 -> 비번: -1, 비번확인: 0
      setPwValidation(-1);
      setPwConfirmValidation(0);
    } else { // 형식에 맞음 -> 비번: 1, 비번확인: 일치하면 1 비일치하면 -1
      setPwValidation(1);
      if (pw === signupData.passwordConfirm) {
        setPwConfirmValidation(1);
      }
      if (pw !== signupData.passwordConfirm) {
        setPwConfirmValidation(-1);
      }
    }
  };

  const validateUserPwConfirm = (pwConfirm) => {
    console.log(pwConfirm);
    if (pwValidation === -1) { // 비번이 유효하지 않으면 -> 0
      setPwConfirmValidation(0);
    } else if (pwConfirm.length === 0) { // 아무것도 없음 -> 0
      setPwConfirmValidation(0);
    } else if (pwConfirm !== signupData.password) { // 비일치 -> -1
      console.log("비일치하자나");
      setPwConfirmValidation(-1);
    } else if (pwValidation === 1) { // 일치 -> 1
      setPwConfirmValidation(1);
    }
  };

  const validateEmail = (email) => {
    console.log(email);
    if (email.length === 0) {
      setEmailValidation(0);
    } else {
      setEmailValidation(1);
    }
  };

  const validateBusiNum = (busiNum) => {
    console.log(busiNum);
    if (busiNum.length === 0) {
      setBusiNumValidation(0);
    } else if (busiNum.length !== 10) {
      setBusiNumValidation(-1);
    } else {
      setBusiNumValidation(1);
    }
  };

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
    if (e.target.name === "businessUserId") {
      validateUserId(e.target.value);
    } else if (e.target.name === "password") {
      validateUserPw(e.target.value);
    } else if (e.target.name === "passwordConfirm") {
      validateUserPwConfirm(e.target.value);
    } else if (e.target.name === "email") {
      validateEmail(e.target.value);
    } else if (e.target.name === "businessNum") {
      validateBusiNum(e.target.value);
    }
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

      await userSignup({
        businessUserId: signupData.businessUserId,
        password: signupData.password,
        name: signupData.name,
        email: signupData.email,
        businessNum: signupData.businessNum,
        stores: List([]),
        state: 1,
      });
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
          idValidation={idValidation}
          pwValidation={pwValidation}
          pwConfirmValidation={pwConfirmValidation}
          emailValidation={emailValidation}
          busiNumValidation={busiNumValidation}
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
