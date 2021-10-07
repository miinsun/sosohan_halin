/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import React from "react";

const CTTableHeader = ({ columns }) => (
  columns && columns.length > 0 ? (
    <thead>
      <tr>
        {columns.map((data) => (
          <th key={data}>{data}</th>
        ))}
      </tr>
    </thead>
  ) : (
    <></>
  )
);

CTTableHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array,
};

CTTableHeader.defaultProps = {
  columns: undefined,
};

export default CTTableHeader;
