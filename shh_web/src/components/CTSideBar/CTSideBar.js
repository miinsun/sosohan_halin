import PropTypes from "prop-types";
import React from "react";
import "./ctsidebar.css";

const CTSideBar = ({ children }) => (
  <div className="sidebar_wrapper">
    <ui className="sidebar_mainMenu">
      {children}
    </ui>
  </div>
);

CTSideBar.propTypes = {
  children: PropTypes.node,
};

CTSideBar.defaultProps = {
  children: undefined,
};

export default CTSideBar;
