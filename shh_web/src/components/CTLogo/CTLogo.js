import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const CTLogo = ({ size, margin }) => (
  <div className="Logo" style={{ textAlign: "center" }}>
    <Image src="images/logo_rectangle.png" width={size} style={{ margin }} />
  </div>

);

CTLogo.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
};

CTLogo.defaultProps = {
  size: "200px",
  margin: "20px",
};

export default CTLogo;
