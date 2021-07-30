import React from "react";
import CTLogo from "../../components/CTLogo";

import FindingPwForm from "./components/FindingPwForm";

const FindingPw = () => (
  <div className="FindingPw">
    <CTLogo />
    <h5>비밀번호 찾기</h5>
    <FindingPwForm />
  </div>
);

export default FindingPw;
