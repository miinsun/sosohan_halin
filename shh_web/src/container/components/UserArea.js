import React, { useState } from "react";
import {
  Nav,
} from "react-bootstrap";
import { useUser, useStore } from "../../components";
import LinkAlarm from "../../pages/LinkAlarm";
import LoginModal from "../../pages/Login";
import SelectShop from "./SelectShop";

const UserArea = () => {
  const { userLogin, userLogout } = useUser();
  const { storeGetMy, myStores } = useStore();

  const getMyStores = async () => {
    try {
      await storeGetMy(sessionStorage.getItem("sessionId"));
    } catch (e) {
      console.log(e);
    }
  };

  const [data, setData] = useState({
    businessUserId: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      console.log(data);

      if (data.businessUserId.length <= 0 || data.password.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      const response = await userLogin(data.businessUserId, data.password);
      sessionStorage.setItem("sessionId", response.data);
      document.location.href = "/";
    } catch (e) {
      alert("로그인 정보를 확인해 주세요.");
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      await userLogout();
      sessionStorage.removeItem("sessionId");
      sessionStorage.removeItem("currentStoreId");
    } catch (err) {
      alert(err);
      console.log(err);
    }
    document.location.href = "/";
  };

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <div className="UserArea">
      {!sessionStorage.getItem("sessionId") && (
        <Nav className="GuestArea">
          <Nav.Link
            onClick={handleShowLogin}
            className="btn btn-outline-primary text-primary"
          >로그인
          </Nav.Link>
          <LoginModal
            onHide={handleCloseLogin}
            close={handleCloseLogin}
            showLogin={showLogin}
            login={login}
            handleChange={handleChange}
          />
        </Nav>
      )}
      {sessionStorage.getItem("sessionId") && (
        <Nav className="LoginArea">
          <Nav.Link href="/editaccount">{sessionStorage.getItem("sessionId")}님</Nav.Link>
          <SelectShop fetch={getMyStores} />
          <LinkAlarm />
          <Nav.Link onClick={logout} className="btn btn-outline-secondary text-muted">로그아웃</Nav.Link>
        </Nav>
      )}
    </div>
  );
};
export default UserArea;
