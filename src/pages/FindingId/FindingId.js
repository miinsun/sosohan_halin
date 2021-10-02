import React, { useRef } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import CTLogo from "../../components/CTLogo";
import FindingIdForm from "./components/FindingIdForm";

const FindingId = () => {
  const childRef = useRef();

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>아이디 찾기</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FindingIdForm ref={childRef} />
      </Modal.Body>

      <Modal.Footer>
        {/* <Button className="btn btn-secondary">취소</Button>{" "} */}
        <Button className="btn btn-primary" onClick={() => { childRef.current.submit(); }}>아이디 찾기</Button>
      </Modal.Footer>
    </>
  // <div className="FindingId">
  //   <CTLogo />
  //   <h5>아이디 찾기</h5>
  //   <FindingIdForm />
  // </div>
  );
};

export default FindingId;
