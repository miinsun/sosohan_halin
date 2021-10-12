import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const CTLogo = ({ width, margin }) => (
  <div className="Logo" style={{ textAlign: "center" }}>
    <Image src="images/logo_rectangle.png" width={width} style={{ margin }} />
  </div>

);

CTLogo.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
};

CTLogo.defaultProps = {
  width: "200px",
  margin: "",
};

export default CTLogo;
