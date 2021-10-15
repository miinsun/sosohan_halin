/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CTTable } from "../../../components";

const StoreSearchListView = ({ total, results }) => (
  <div>
    <div>
      {total > 0 && results.map((data) => (
        <div className="shadow p-3 mb-3 bg-body rounded" key={data.storeId}>
          <div className="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <img width="200px" height="200px" src={data.logoImage} />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">{data.mainCategory}</strong>
              <h3 className="mb-0">
                <Link
                  to={{
                    pathname: "/storeDetail",
                    state: { storeId: data.storeId },
                  }}
                  className="link-dark rounded"
                >{data.name}
                </Link>
              </h3><p />
              <div className="mb-1 text-muted">{data.shortIntroduce}</div>
              <div className="mb-1 text-muted">{data.address1} {data.address2}</div>
              <div className="mb-1 text-muted">{data.telephone}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

StoreSearchListView.propTypes = {
  total: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
};

StoreSearchListView.defaultProps = {
  total: 0,
  results: [],
};

export default StoreSearchListView;
