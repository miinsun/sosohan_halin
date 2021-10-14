import React, { useState } from "react";
import {
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FindingId from "../../FindingId";
import FindingPw from "../../FindingPw";

const FindingIdLink = () => {
  const [showFindId, setShowFindId] = useState(false);
  const [showFindPw, setShowFindPw] = useState(false);

  const handleCloseFindId = () => setShowFindId(false);
  const handleShowFindId = () => setShowFindId(true);

  const handleCloseFindPw = () => setShowFindPw(false);
  const handleShowFindPw = () => setShowFindPw(true);

  return (
  // <span className="FindingIdLink">
  //   <Link className="btn btn-secondary" to="/findingid">아이디 찾기</Link>
  // </span>

    <div className="FindingIdLink text-center text-muted my-2">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link class="text-reset" onClick={handleShowFindId}>아이디</Link> /&nbsp;
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link class="text-reset" onClick={handleShowFindPw}>비밀번호</Link> 찾기
      <Modal show={showFindId} onHide={handleCloseFindId}>
        <FindingId />
      </Modal>
      <Modal show={showFindPw} onHide={handleCloseFindPw}>
        <FindingPw />
      </Modal>
    </div>
  );
};
export default FindingIdLink;
