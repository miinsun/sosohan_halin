import React from "react";
import Logo from "../../Logo";

import IdResult from "./components/IdResult";

const FindingIdResult = () => (
  <div className="FindingIdResult">
    <Logo />
    <h5>아이디 찾기</h5>
    <IdResult />
    <button type="button">로그인</button>
    <button type="button">비밀번호 찾기</button>
  </div>
);

export default FindingIdResult;
