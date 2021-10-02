import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import {
  Modal, Button,
} from "react-bootstrap";
import Signup from "../../Signup";

const SignupLink = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => setShowSignup(false);
  const handleShow = () => setShowSignup(true);
  // const history = useHistory();

  // const gotoSignup = () => {
  //   history.push("/signup");
  // };
  return (
    <span className="SignupLink">
      {/* <Link className="btn btn-secondary" to="/signup">회원가입</Link> */}
      <Button className="btn btn-secondary" onClick={handleShow}>회원가입</Button>
      <Modal show={showSignup} onHide={handleClose}>
        <Signup />
      </Modal>
    </span>
  );
};
export default SignupLink;
