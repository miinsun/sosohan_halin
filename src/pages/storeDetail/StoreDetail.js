/* eslint-disable import/no-named-as-default */
import React from "react";
import OneButton from "./components/OneButton";
import StoreInformation from "./components/StoreInformation";

const StoreDetail = () => (
  <div>
    <StoreInformation />
    <OneButton type="button" title="제안하기" />
  </div>
);

export default StoreDetail;
