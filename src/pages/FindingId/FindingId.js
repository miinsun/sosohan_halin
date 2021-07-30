import React from "react";

import CTLogo from "../../components/CTLogo";
import FindingIdForm from "./components/FindingIdForm";

const FindingId = () => (
  <div className="FindingId">
    <CTLogo />
    <h5>아이디 찾기</h5>
    <FindingIdForm />
  </div>
);

export default FindingId;
