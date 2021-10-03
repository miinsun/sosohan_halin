import React, { useRef } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import CTLogo from "../../components/CTLogo";
import FindingPwForm from "./components/FindingPwForm";

const FindingPw = () => {
  const childRef = useRef();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>비밀번호 찾기</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FindingPwForm ref={childRef} />
      </Modal.Body>

      <Modal.Footer>
        {/* <Button className="btn btn-secondary">취소</Button>{" "} */}
        <Button className="btn btn-primary" onClick={() => { childRef.current.submit(); }}>임시 비밀번호 발급</Button>
      </Modal.Footer>
    </>

  // <div className="FindingPw">
  //   <CTLogo />
  //   <h5>비밀번호 찾기</h5>
  //   <FindingPwForm />
  // </div>
  );
};

export default FindingPw;
