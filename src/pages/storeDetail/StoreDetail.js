import React from "react";
import StoreInformation from "./components/StoreInformation";
// eslint-disable-next-line import/no-named-as-default
import OneButton from "../../OneButton";

const StoreDetail = () => (
  <div>
    <StoreInformation />
    <OneButton title="제안하기" />
  </div>
);

export default StoreDetail;
