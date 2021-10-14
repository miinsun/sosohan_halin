import React, { useState } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "../../Signup";

const SignupLink = ({ close }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const history = useHistory();

  // const gotoSignup = () => {
  //   history.push("/signup");
  // };

  return (
    <div className="SignupLink text-muted">
      {/* <Link className="btn btn-secondary" to="/signup">회원가입</Link> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="text-reset" onClick={handleShow}>아직 회원이 아니신가요?</Link>
      {/* <Button className="btn btn-secondary" onClick={() => { handleShow(); }}>회원가입</Button> */}
      <Modal id="signupModal" show={show} onHide={handleClose}>
        <Signup />
      </Modal>
    </div>
  );
};
export default SignupLink;
