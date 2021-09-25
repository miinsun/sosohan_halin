/* eslint-disable import/no-named-as-default */
import React from "react";
import { Link } from "react-router-dom";
import { CTOneButton } from "../../components";
// import OneButton from "./components/OneButton";
import StoreInformation from "./components/StoreInformation";

const StoreDetail = () => (
  <div>
    <StoreInformation />
    <Link to="/linksuggest">
      <CTOneButton type="button" title="제안하기" />
    </Link>
  </div>
);

export default StoreDetail;
