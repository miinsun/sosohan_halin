/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import LinkHistory from "./components/LinkHistory";
import Sidebar from "./components/Sidebar";

const LinkSentHistory = () => (
  <div className="LinkSentHistory">
    <Sidebar />
    <LinkHistory />
  </div>
);

export default LinkSentHistory;
