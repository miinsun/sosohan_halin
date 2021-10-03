import PropTypes from "prop-types";
import React from "react";

const CTSideBarMain = ({
  hasSub, id, url, icon, content, children,
}) => (

  <li className="sidebar_item" id={id}>
    {hasSub ? (
      <div>
        <a href={`#${id}`} className="sidebar_btn"><i className={`fas ${icon}`} />{content}</a>
        <div className="sidebar_subMenu">
          {children}
        </div>
      </div>
    ) : (
      <a href={url} className="sidebar_btn"><i className={icon} />{content}</a>
    )}
  </li>
);

CTSideBarMain.propTypes = {
  hasSub: PropTypes.bool,
  id: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
};

CTSideBarMain.defaultProps = {
  hasSub: true,
  id: "",
  url: "",
  icon: "",
  content: "",
  children: undefined,
};

export default CTSideBarMain;
