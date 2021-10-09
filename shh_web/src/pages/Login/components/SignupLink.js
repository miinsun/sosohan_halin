import React, { useState } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
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
    <span className="SignupLink">
      {/* <Link className="btn btn-secondary" to="/signup">회원가입</Link> */}
      <Button className="btn btn-secondary" onClick={() => { handleShow(); }}>회원가입</Button>
      <Modal id="signupModal" show={show} onHide={handleClose}>
        <Signup />
      </Modal>
    </span>
  );
};
export default SignupLink;