import React from "react";
import Logo from "../../Logo";

import FindingPwForm from "./components/FindingPwForm";

const FindingPw = () => (
  <div className="FindingPw">
    <Logo />
    <h5>비밀번호 찾기</h5>
    <FindingPwForm />
  </div>
);

export default FindingPw;
