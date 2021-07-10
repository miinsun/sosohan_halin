import React from "react";

import Logo from "../../Logo";
import FindingIdForm from "./components/FindingIdForm";

const FindingId = () => (
  <div className="FindingId">
    <Logo />
    <h5>아이디 찾기</h5>
    <FindingIdForm />
  </div>
);

export default FindingId;
