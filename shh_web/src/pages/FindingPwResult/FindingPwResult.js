import React from "react";
import { Link } from "react-router-dom";
import CTLogo from "../../components/CTLogo";

import PwResult from "./components/PwResult";

const FindingPwResult = () => (
  <div className="FindingPwResult">
    <CTLogo />
    <h5>비밀번호 찾기</h5>
    <PwResult />
    <Link to="/login" class="btn btn-secondary">로그인</Link>
  </div>
);

export default FindingPwResult;
