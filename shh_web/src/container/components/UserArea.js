import React, { useState } from "react";
import {
  Nav,
} from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useUser, useStore } from "../../components";
import LinkAlarm from "../../pages/LinkAlarm";
// import LoginModal from "../../pages/Login";
import UserModal from "../../pages/UserModal";
import SelectShop from "./SelectShop";

const UserArea = () => {
  const { userLogout } = useUser();
  const { storeGetMy, myStores } = useStore();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getMyStores = async () => {
    try {
      await storeGetMy(sessionStorage.getItem("sessionId"));
    } catch (e) {
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

  return (
    <div className="UserArea">
      {!sessionStorage.getItem("sessionId") && (
        <Nav className="GuestArea">
          <Nav.Link
            onClick={handleShow}
            className="btn btn-outline-primary text-primary"
          >로그인
          </Nav.Link>
          <UserModal
            onHide={handleClose}
            close={handleClose}
            show={show}
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
