import React, { useState } from "react";
import {
  Nav, Modal,
} from "react-bootstrap";
import { useUser } from "../../components";
import LinkAlarm from "../../pages/LinkAlarm";
import Login from "../../pages/Login";
import SelectShop from "./SelectShop";

const sessionId = sessionStorage.getItem("sessionId");

const UserArea = () => {
  const { userLogout } = useUser();

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
          {/* <Nav.Link href="/login" className="btn btn-primary text-light">Login</Nav.Link> */}
          <Nav.Link onClick={handleShowLogin} className="btn btn-primary text-light">Login</Nav.Link>
          <Modal id="loginModal" show={showLogin} onHide={handleCloseLogin}>
            <Login close={handleCloseLogin} />
          </Modal>
        </Nav>
      )}
      {sessionStorage.getItem("sessionId") && (
        <Nav className="LoginArea">
          <Nav.Link href="/editaccount">{sessionId}님</Nav.Link>
          <SelectShop />
          <LinkAlarm />
          <Nav.Link onClick={logout} className="btn btn-secondary text-light">Logout</Nav.Link>
        </Nav>
      )}
    </div>

  // <div className="UserArea container">
  //   {!sessionStorage.getItem("sessionId") && (
  //     <div className="GuestArea row">
  //       <div className="col">
  //         <Link to="/login" className="btn btn-primary">로그인</Link>
  //       </div>
  //     </div>
  //   )}
  //   {sessionStorage.getItem("sessionId") && (
  //     <div className="LoginArea row">
  //       <div className="col">
  //         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  //         <Link to="/editaccount">{sessionId}님</Link>
  //       </div>
  //       <div className="col">
  //         <SelectShop />
  //       </div>
  //       <div className="col">
  //         <LinkAlarm />
  //       </div>
  //       <div className="col">
  //         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  //         <Link onClick={logout} className="btn btn-secondary">로그아웃</Link>
  //       </div>
  //     </div>
  //   )}
  // </div>
  );
};
export default UserArea;
