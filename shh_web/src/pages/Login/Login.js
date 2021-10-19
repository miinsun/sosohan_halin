import React from "react";
import {
  Modal,
} from "react-bootstrap";
import FindingAccountLink from "./components/FindingAccountLink";

import LoginForm from "./components/LoginForm";
import SignupLink from "./components/SignupLink";
import "../../styles/form-sign.css";

const Login = ({
  close, showLogin, login, handleChange,
}) => (

  <Modal id="loginModal" size="sm" dialogClassName="my-modal" show={showLogin} onHide={close}>
    <Modal.Header closeButton>
      {/* <Modal.Title className="text-muted">로그인</Modal.Title> */}
      <span className="text-muted">로그인</span>
    </Modal.Header>

    <Modal.Body>
      <LoginForm login={login} handleChange={handleChange} />
      <FindingAccountLink close={close} />
    </Modal.Body>

    <Modal.Footer>
      <SignupLink close={close} />
      {/* <FindingIdLink close={close} /> <FindingPwLink close={close} /> */}
    </Modal.Footer>
  </Modal>
);

export default Login;
