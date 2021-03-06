/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import {
  ProSidebar,
} from "react-pro-sidebar";
import LinkHistoryOut from "./components/LinkHistoryOut";
import Sidebar from "./components/Sidebar";

const LinkSentHistory = () => (
  <div className="LinkSentHistory">
    <Sidebar />
    <LinkHistoryOut />
  </div>
);

export default LinkSentHistory;
