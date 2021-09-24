import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CTTable } from "../../../components";

const MyStorePrintView = (link) => (
  <div>
    <h1>{link.receiver_id}</h1>

  </div>
);

export default MyStorePrintView;
