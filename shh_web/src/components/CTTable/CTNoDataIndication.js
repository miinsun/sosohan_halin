import PropTypes from "prop-types";
import React from "react";

const CTNoDataIndication = ({ columns, emptyDataMessage }) => (
  columns && columns.length > 0 ? (
    <tr>
      <td colSpan={columns.length}>
        {emptyDataMessage}
      </td>
    </tr>
  ) : (
    <></>
  )
);

CTNoDataIndication.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array,
  emptyDataMessage: PropTypes.string,
};

CTNoDataIndication.defaultProps = {
  columns: undefined,
  emptyDataMessage: "",
};

export default CTNoDataIndication;
