/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import LinkHistoryIn from "./components/LinkHistoryIn";
import Sidebar from "./components/Sidebar";

const LinkReceptionHistory = () => (
  <div className="LinkReceptionHistory">
    <Sidebar />
    <LinkHistoryIn />
  </div>
);

export default LinkReceptionHistory;
