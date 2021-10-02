import React, { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { CTLogo } from "../../components";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  const childRef = useRef();

  return (
  //   <div className="Signup">
  //     <CTLogo />
  //     <SignupForm />
  //   </div>

    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SignupForm ref={childRef} />
      </Modal.Body>

      <Modal.Footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        {/* <Button className="btn btn-secondary">취소</Button>{" "} */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Button className="btn btn-primary" onClick={() => { childRef.current.submit(); }}>가입하기 </Button>
      </Modal.Footer>
    </>
  );
};
export default Signup;
