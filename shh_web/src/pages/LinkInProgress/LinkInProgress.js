/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import LinkInProgressHistory from "./components/LinkInProgressHistory";
import Sidebar from "./components/Sidebar";

const LinkInProgress = () => (
  <div className="LinkInProgress">
    <Sidebar />
    <LinkInProgressHistory />
  </div>
);

export default LinkInProgress;
