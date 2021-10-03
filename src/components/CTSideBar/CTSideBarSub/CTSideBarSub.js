import PropTypes from "prop-types";
import React from "react";

const CTSideBarSub = ({ url, content }) => (
  <a href={url}> {content}</a>
);

CTSideBarSub.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string,
};

CTSideBarSub.defaultProps = {
  url: "",
  content: "",
};

export default CTSideBarSub;
