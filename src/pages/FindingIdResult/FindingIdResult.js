import React from "react";
import { Link } from "react-router-dom";
import CTLogo from "../../components/CTLogo";

import IdResult from "./components/IdResult";

const FindingIdResult = ({ match }) => (
  <div className="FindingIdResult">
    <CTLogo />
    <h5>아이디 찾기</h5>
    <IdResult result={match.params.result} />
    <Link to="/login" class="btn btn-secondary">로그인</Link>
    <Link to="/findingpw" class="btn btn-secondary">비밀번호 찾기</Link>
  </div>
);

export default FindingIdResult;
