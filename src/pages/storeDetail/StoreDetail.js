/* eslint-disable import/no-named-as-default */
import React from "react";
import { CTOneButton } from "../../components";
// import OneButton from "./components/OneButton";
import StoreInformation from "./components/StoreInformation";

const StoreDetail = () => (
  <div>
    <StoreInformation />
    <CTOneButton type="button" title="제안하기" />
  </div>
);

export default StoreDetail;
