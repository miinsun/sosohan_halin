/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CTTable } from "../../../components";

const StoreSearchListView = ({ total, results }) => (
  <div>
    <CTTable
      columns={[
        "번호",
        "상점명",
        "액션",
      ]}
      total={total}
      emptyDataMessage="등록된 상점이 없습니다."
    >
      {total > 0 && results.map((data, index) => (
        <tr key={data.storeId}>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>
            <Link className="btn btn-primary" to="/storeRegistration">수정</Link>

            {/* eslint-disable-next-line  */}
            <a className="btn btn-primary" onClick={() => remove(data)}>삭제
            </a>
          </td>
        </tr>
      ))}
    </CTTable>
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
