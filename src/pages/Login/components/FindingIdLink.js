import React, { useState } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import FindingId from "../../FindingId";
// import { Link } from "react-router-dom";

const FindingIdLink = () => {
  const [showFindId, setShowFindId] = useState(false);

  const handleClose = () => setShowFindId(false);
  const handleShow = () => setShowFindId(true);

  return (
  // <span className="FindingIdLink">
  //   <Link className="btn btn-secondary" to="/findingid">아이디 찾기</Link>
  // </span>

    <span className="FindingIdLink">
      <Button className="btn btn-secondary" onClick={handleShow}>아이디 찾기</Button>
      <Modal show={showFindId} onHide={handleClose}>
        <FindingId />
      </Modal>
    </span>
  );
};
export default FindingIdLink;
