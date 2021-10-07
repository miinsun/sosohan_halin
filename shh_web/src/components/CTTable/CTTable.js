import PropTypes from "prop-types";
import React from "react";
import CTNoDataIndication from "./CTNoDataIndication";
import CTTableHeader from "./CTTableHeader";

const CTTable = ({ children, total, ...props }) => (
  <table>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <CTTableHeader {...props} />
    <tbody>
      {total > 0 ? children : (
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        <CTNoDataIndication {...props} />
      )}
    </tbody>
  </table>
);

CTTable.propTypes = {
  total: PropTypes.number,
  children: PropTypes.node,
};

CTTable.defaultProps = {
  total: 0,
  children: undefined,
};

export default CTTable;
