/* eslint-disable import/extensions */
import React from "react";
import StoreSidebar from "../../StoreSidebar";
// eslint-disable-next-line import/no-named-as-default
import StoreSearch from "./components/StoreSearch";
import StoreSearchList from "./components/StoreSearchList";

const StoreList = () => (
  <>
    <StoreSidebar />
    <div className=" d-flex flex-column h-100 col-6 mx-auto">
      <h4 className="mb-3">상점 검색</h4>
      <StoreSearch />
      <p />
      <StoreSearchList />
    </div>
  </>
);

export default StoreList;
