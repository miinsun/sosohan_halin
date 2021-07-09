/* eslint-disable import/no-named-as-default */
import React from "react";
import StoreInformation from "./components/StoreInformation";
import OneButton from "./components/OneButton";

const StoreDetail = () => (
  <div>
    <StoreInformation />
    <OneButton type="button" title="제안하기" />
  </div>
);

export default StoreDetail;
