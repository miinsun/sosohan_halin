import React from "react";
import Logo from "../../Logo";

import PwResult from "./components/PwResult";

const FindingPwResult = () => (
  <div className="FindingPwResult">
    <Logo />
    <h5>비밀번호 찾기</h5>
    <PwResult />
    <button type="button">로그인</button>
  </div>
);

export default FindingPwResult;
