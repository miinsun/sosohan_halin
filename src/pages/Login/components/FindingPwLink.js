import React from "react";
import { Link } from "react-router-dom";

const FindingPwLink = () => (
  <span className="FindingPwLink">
    <Link className="btn btn-secondary" to="/findingpw">비밀번호 찾기</Link>
  </span>
);

export default FindingPwLink;
