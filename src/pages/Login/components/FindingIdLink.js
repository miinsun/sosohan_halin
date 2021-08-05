import React from "react";
import { Link } from "react-router-dom";

const FindingIdLink = () => (
  <span className="FindingIdLink">
    <Link className="btn btn-secondary" to="/findingid">아이디 찾기</Link>
  </span>
);

export default FindingIdLink;
