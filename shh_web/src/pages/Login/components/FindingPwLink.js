import React, { useState } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FindingPw from "../../FindingPw";

const FindingPwLink = () => {
  const [showFindPw, setShowFindPw] = useState(false);

  const handleClose = () => setShowFindPw(false);
  const handleShow = () => setShowFindPw(true);

  return (
  // <span className="FindingPwLink">
  //   <Link className="btn btn-secondary" to="/findingpw">비밀번호 찾기</Link>
  // </span>

    <span className="FindingPwLink">
      <Button className="btn btn-secondary" onClick={handleShow}>비밀번호 찾기</Button>
      <Modal show={showFindPw} onHide={handleClose}>
        <FindingPw />
      </Modal>
    </span>
  );
};

export default FindingPwLink;
