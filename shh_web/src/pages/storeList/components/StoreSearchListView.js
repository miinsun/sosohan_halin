/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CTTable } from "../../../components";

const StoreSearchListView = ({ total, results }) => (
  <div>
    <div>
      {total > 0 && results.map((data) => (
        <div key={data.storeId}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <img width="200px" height="200px" src={data.logoImage} />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">{data.mainCategory}</strong>
              <h3 className="mb-0">
                <Link
                  to={{
                    pathname: "/storeDetail",
                    store: data,
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

  // <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
  //   <div className="col-auto d-none d-lg-block">
  //     <img src="https://lab.hanium.or.kr/uploads/-/system/appearance/header_logo/1/content_logo.png" />
  //   </div>

  //   <div className="col p-4 d-flex flex-column position-static">

  //     {total > 0 && results.map((data, index) => (
  //       <tr key={data.storeId}>
  //         <td>{index + 1}</td>
  //         <strong className="d-inline-block mb-2 text-success">카테고리</strong>
  //         <Link to="/storeDetail"><h3 className="mb-0">{data.name}</h3></Link>
  //         <div className="mb-1 text-muted">한줄소개</div>
  //         <div className="mb-1 text-muted">위치</div>
  //       </tr>
  //     ))}
  //   </div>
  // </div>
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
