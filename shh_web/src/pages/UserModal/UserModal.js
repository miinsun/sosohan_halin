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
    userLogin, userSignup, userFindingId, userFindingPw, userCheckId,
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
    const regexId = /^[A-Za-z0-9+]{6,20}$/;
    if (id.length === 0) { // 공백 -> 0
      setIdValidation(0);
    } else if (!regexId.test(id)) { // 형식에 안맞음 -> -1
      setIdValidation(-1);
    } else { // 공백이 아니며 형식에 맞음 -> 중복을 확인하여 중복이면 -2, 중복이 아니면 1
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
    const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*|/?])[A-Za-z\d`~!@#$%^&*|/?]{10,16}$/;
    if (pw.length === 0) { // 공백 -> 비번, 비번확인 다 0
      setPwValidation(0);
      setPwConfirmValidation(0);
    } else if (!regexPw.test(pw)) { // 형식에 안맞음 -> 비번: -1, 비번확인: 0
      setPwValidation(-1);
      setPwConfirmValidation(0);
    } else { // 공백이 아니며 형식에 맞음 -> 비번: 1, 비번확인: 일치하면 1 / 비일치하면 -1
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
    if (pwConfirm.length === 0 || pwValidation === -1) { // 공백 or 'password' 값 유효하지 않음 -> 0
      setPwConfirmValidation(0);
    } else if (pwConfirm !== signupData.password) { // 비일치 -> -1
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

  const validateBusiNum = (busiNum) => {
    console.log(busiNum);
    const regexBusiNum = /^\d{10}$/;
    if (busiNum.length === 0) {
      setBusiNumValidation(0);
    } else if (!regexBusiNum.test(busiNum)) {
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
      if (signupData.name.length <= 0 || idValidation !== 1 || pwValidation !== 1
        || pwConfirmValidation !== 1 || emailValidation !== 1 || busiNumValidation !== 1) {
        alert("정확한 정보를 입력해 주세요.");
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
