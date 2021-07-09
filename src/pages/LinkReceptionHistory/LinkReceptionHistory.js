/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import LinkHistory from "./components/LinkHistory";
import Sidebar from "./components/Sidebar";

class LinkReceptionHistory extends Component {
  render() {
    return (
      <div className="LinkReceptionHistory">
        <Sidebar />
        <LinkHistory />
      </div>
    );
  }
}

export default LinkReceptionHistory;
