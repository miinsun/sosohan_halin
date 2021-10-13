/* eslint-disable import/extensions */
import React from "react";
// eslint-disable-next-line import/no-named-as-default
import StoreSearch from "./components/StoreSearch";
import StoreSearchList from "./components/StoreSearchList";

const StoreList = () => (
  <div className="d-flex flex-column h-100">
    <StoreSearch />
    <p />
    <StoreSearchList />
  </div>
);

export default StoreList;
