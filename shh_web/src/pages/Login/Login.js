import React from "react";
import {
  Modal,
} from "react-bootstrap";
import { useUser, useStore } from "../../components";
import FindingAccountLink from "./components/FindingAccountLink";

import LoginForm from "./components/LoginForm";
import SignupLink from "./components/SignupLink";
import "../../styles/form-sign.css";

const Login = ({ close, showLogin, login }) => (
  <Modal id="loginModal" size="sm" dialogClassName="my-modal" show={showLogin} onHide={close}>
    <Modal.Header closeButton>
      {/* <Modal.Title className="text-muted">로그인</Modal.Title> */}
      <span className="text-muted">로그인</span>
    </Modal.Header>

    <Modal.Body>
      <LoginForm login={login} />
      <FindingAccountLink close={close} />
    </Modal.Body>

    <Modal.Footer>
      <SignupLink close={close} />
      {/* <FindingIdLink close={close} /> <FindingPwLink close={close} /> */}
    </Modal.Footer>
  </Modal>
);

export default Login;
